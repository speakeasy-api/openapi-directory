import { SpeakeasyBase } from "../../../internal/utils";
import { EmailTemplate } from "./emailtemplate";
import { IdpConfig } from "./idpconfig";
/**
 * Response of getting the project configuration.
 */
export declare class IdentitytoolkitRelyingpartyGetProjectConfigResponse extends SpeakeasyBase {
    /**
     * Whether to allow password user sign in or sign up.
     */
    allowPasswordUser?: boolean;
    /**
     * Browser API key, needed when making http request to Apiary.
     */
    apiKey?: string;
    /**
     * Authorized domains.
     */
    authorizedDomains?: string[];
    /**
     * Template for an email template.
     */
    changeEmailTemplate?: EmailTemplate;
    dynamicLinksDomain?: string;
    /**
     * Whether anonymous user is enabled.
     */
    enableAnonymousUser?: boolean;
    /**
     * OAuth2 provider configuration.
     */
    idpConfig?: IdpConfig[];
    /**
     * Template for an email template.
     */
    legacyResetPasswordTemplate?: EmailTemplate;
    /**
     * Project ID of the relying party.
     */
    projectId?: string;
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
