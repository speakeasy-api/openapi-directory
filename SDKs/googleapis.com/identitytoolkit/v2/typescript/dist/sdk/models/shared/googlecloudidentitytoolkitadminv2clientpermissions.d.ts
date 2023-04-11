import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration related to restricting a user's ability to affect their account.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2ClientPermissions extends SpeakeasyBase {
    /**
     * When true, end users cannot delete their account on the associated project through any of our API methods
     */
    disabledUserDeletion?: boolean;
    /**
     * When true, end users cannot sign up for a new account on the associated project through any of our API methods
     */
    disabledUserSignup?: boolean;
}
