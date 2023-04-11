import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationObject } from "./authenticationobject";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { HrefType } from "./hreftype";
import { ScaStatusEnum } from "./scastatusenum";
/**
 * Body of the JSON response for a Start SCA authorisation request.
 */
export declare class StartScaprocessResponse extends SpeakeasyBase {
    /**
     * A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the
     *
     * @remarks
     * response depend on the dynamical decisions of the ASPSP when processing the request.
     *
     * **Remark:** All links can be relative or full links, to be decided by the ASPSP.
     *
     * Type of links admitted in this response, (further links might be added for ASPSP defined
     * extensions):
     *
     * - 'scaRedirect':
     *   In case of an SCA Redirect Approach, the ASPSP is transmitting the link to which to
     *   redirect the PSU browser.
     * - 'scaOAuth':
     *   In case of a SCA OAuth2 Approach, the ASPSP is transmitting the URI where the configuration of the Authorisation Server can be retrieved. The configuration follows the OAuth 2.0 Authorisation Server Metadata specification.
     * * 'confirmation':
     *   Might be added by the ASPSP if either the "scaRedirect" or "scaOAuth" hyperlink is returned
     *   in the same response message.
     *   This hyperlink defines the URL to the resource which needs to be updated with
     *     * a confirmation code as retrieved after the plain redirect authentication process with the ASPSP authentication server or
     *     * an access token as retrieved by submitting an authorization code after the integrated OAuth based authentication process with the ASPSP authentication server.
     * - 'updatePsuIdentification':
     *   The link to the authorisation or cancellation authorisation sub-resource,
     *   where PSU identification data needs to be uploaded.
     * - 'startAuthorisationWithPsuAuthentication':
     *   The link to the authorisation or cancellation authorisation sub-resource,
     *   where PSU authentication data needs to be uploaded.
     * - 'startAuthorisationWithEncryptedPsuAuthentication':
     *     Same as startAuthorisactionWithPsuAuthentication where the authentication data need to be encrypted on
     *     application layer in uploading.
     * - 'selectAuthenticationMethod':
     *   The link to the authorisation or cancellation authorisation sub-resource,
     *   where the selected authentication method needs to be uploaded.
     *   This link is contained under exactly the same conditions as the data element 'scaMethods'.
     * - 'authoriseTransaction':
     *   The link to the authorisation or cancellation authorisation sub-resource,
     *   where the authorisation data has to be uploaded, e.g. the TOP received by SMS.
     * - 'scaStatus':
     *   The link to retrieve the scaStatus of the corresponding authorisation sub-resource.
     *
     */
    links: Record<string, HrefType>;
    /**
     * Resource identification of the related SCA.
     */
    authorisationId: string;
    /**
     * It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.
     *
     * @remarks
     * In rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.
     *
     */
    challengeData?: ChallengeData;
    /**
     * Authentication object.
     *
     * @remarks
     *
     */
    chosenScaMethod?: ChosenScaMethod;
    /**
     * Text to be displayed to the PSU.
     */
    psuMessage?: string;
    /**
     * This data element might be contained, if SCA is required and if the PSU has a choice between different
     *
     * @remarks
     * authentication methods.
     *
     * Depending on the risk management of the ASPSP this choice might be offered before or after the PSU
     * has been identified with the first relevant factor, or if an access token is transported.
     *
     * If this data element is contained, then there is also a hyperlink of type 'startAuthorisationWithAuthenticationMethodSelection'
     * contained in the response body.
     *
     * These methods shall be presented towards the PSU for selection by the TPP.
     *
     */
    scaMethods?: AuthenticationObject[];
    /**
     * This data element is containing information about the status of the SCA method applied.
     *
     * @remarks
     *
     * The following codes are defined for this data type.
     *
     *   * 'received':
     *     An authorisation or cancellation-authorisation resource has been created successfully.
     *   * 'psuIdentified':
     *     The PSU related to the authorisation or cancellation-authorisation resource has been identified.
     *   * 'psuAuthenticated':
     *     The PSU related to the authorisation or cancellation-authorisation resource has been identified and authenticated e.g. by a password or by an access token.
     *   * 'scaMethodSelected':
     *     The PSU/TPP has selected the related SCA routine.
     *     If the SCA method is chosen implicitly since only one SCA method is available,
     *     then this is the first status to be reported instead of 'received'.
     *   * 'unconfirmed':
     *     SCA is technically successfully finalised by the PSU, but the authorisation resource needs a confirmation command by the TPP yet.
     *   * 'started':
     *     The addressed SCA routine has been started.
     *   * 'finalised':
     *     The SCA routine has been finalised successfully (including a potential confirmation command).
     *     This is a final status of the authorisation resource.
     *   * 'failed':
     *     The SCA routine failed.
     *     This is a final status of the authorisation resource.
     *   * 'exempted':
     *     SCA was exempted for the related transaction, the related authorisation is successful.
     *     This is a final status of the authorisation resource.
     *
     */
    scaStatus: ScaStatusEnum;
}
