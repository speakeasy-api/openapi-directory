import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings that the tenants will inherit from project level.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2Inheritance extends SpeakeasyBase {
    /**
     * Whether to allow the tenant to inherit custom domains, email templates, and custom SMTP settings. If true, email sent from tenant will follow the project level email sending configurations. If false (by default), emails will go with the default settings with no customizations.
     */
    emailSendingConfig?: boolean;
}
