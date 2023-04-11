import { SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplate } from "./emailtemplate";
import { IdpConfig } from "./idpconfig";
/**
 * Request to set the project configuration.
 */
export declare class IdentitytoolkitRelyingpartySetProjectConfigRequest extends SpeakeasyBase {
    /**
     * Whether to allow password user sign in or sign up.
     */
    allowPasswordUser?: boolean;
    /**
     * Browser API key, needed when making http request to Apiary.
     */
    apiKey?: string;
    /**
     * Authorized domains for widget redirect.
     */
    authorizedDomains?: string[];
    /**
     * Template for an email template.
     */
    changeEmailTemplate?: EmailTemplate;
    /**
     * GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration.
     */
    delegatedProjectNumber?: string;
    /**
     * Whether to enable anonymous user.
     */
    enableAnonymousUser?: boolean;
    /**
     * Oauth2 provider configuration.
     */
    idpConfig?: IdpConfig[];
    /**
     * Template for an email template.
     */
    legacyResetPasswordTemplate?: EmailTemplate;
    /**
     * Template for an email template.
     */
    resetPasswordTemplate?: EmailTemplate;
    /**
     * Whether to use email sending provided by Firebear.
     */
    useEmailSending?: boolean;
    /**
     * Template for an email template.
     */
    verifyEmailTemplate?: EmailTemplate;
}
