import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class AssociationSession extends SpeakeasyBase {
    /**
     * Hosted account id of the associated publisher after association. Present if status is ACCEPTED.
     */
    accountId?: string;
    /**
     * Unique identifier of this association session.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsensehost#associationSession.
     */
    kind?: string;
    /**
     * The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated)
     */
    productCodes?: string[];
    /**
     * Redirect URL of this association session. Used to redirect users into the AdSense association flow.
     */
    redirectUrl?: string;
    /**
     * Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.
     */
    status?: string;
    /**
     * The preferred locale of the user themselves when going through the AdSense association flow.
     */
    userLocale?: string;
    /**
     * The locale of the user's hosted website.
     */
    websiteLocale?: string;
    /**
     * The URL of the user's hosted website.
     */
    websiteUrl?: string;
}
