import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for settings related to email privacy and public visibility. Settings in this config protect against email enumeration, but may make some trade-offs in user-friendliness.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig extends SpeakeasyBase {
    /**
     * Migrates the project to a state of improved email privacy. For example certain error codes are more generic to avoid giving away information on whether the account exists. In addition, this disables certain features that as a side-effect allow user enumeration. Enabling this toggle disables the fetchSignInMethodsForEmail functionality and changing the user's email to an unverified email. It is recommended to remove dependence on this functionality and enable this toggle to improve user privacy.
     */
    enableImprovedEmailPrivacy?: boolean;
}
