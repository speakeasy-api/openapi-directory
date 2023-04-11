import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { AuthenticationObject } from "./authenticationobject";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { HrefType } from "./hreftype";
import { ScaStatusEnum } from "./scastatusenum";
/**
 * Body of the JSON response for a successful update PSU authentication request.
 */
export declare class UpdatePsuAuthenticationResponse extends SpeakeasyBase {
    /**
     * A list of hyperlinks to be recognised by the TPP. Might be contained, if several authentication methods
     *
     * @remarks
     * are available for the PSU.
     * Type of links admitted in this response:
     *   * 'updateAdditionalPsuAuthentication':
     *     The link to the payment initiation or account information resource,
     *     which needs to be updated by an additional PSU password.
     *     This link is only contained in rare cases,
     *     where such additional passwords are needed for PSU authentications.
     *   * 'updateAdditionalEncryptedPsuAuthentication':
     *     The link to the payment initiation or account information resource,
     *     which needs to be updated by an additional encrypted PSU password.
     *     This link is only contained in rare cases, where such additional passwords are needed for PSU authentications.
     *   * 'selectAuthenticationMethod':
     *     This is a link to a resource, where the TPP can select the applicable second factor authentication
     *     methods for the PSU, if there were several available authentication methods.
     *     This link is only contained, if the PSU is already identified or authenticated with the first relevant
     *     factor or alternatively an access token, if SCA is required and if the PSU has a choice between different
     *     authentication methods.
     *     If this link is contained, then there is also the data element 'scaMethods' contained in the response body.
     *   * 'authoriseTransaction':
     *     The link to the resource, where the "Transaction authorisation request" is sent to.
     *     This is the link to the resource which will authorise the transaction by checking the SCA authentication
     *     data within the Embedded SCA approach.
     *   * 'scaStatus':
     *     The link to retrieve the scaStatus of the corresponding authorisation sub-resource.
     *
     */
    links?: Record<string, HrefType>;
    /**
     * Resource identification of the related SCA.
     */
    authorisationId?: string;
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
    currencyConversionFees?: Amount;
    estimatedInterbankSettlementAmount?: Amount;
    estimatedTotalAmount?: Amount;
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
    transactionFees?: Amount;
}
