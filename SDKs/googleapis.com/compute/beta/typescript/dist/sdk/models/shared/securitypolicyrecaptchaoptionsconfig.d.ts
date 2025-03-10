import { SpeakeasyBase } from "../../../internal/utils";
export declare class SecurityPolicyRecaptchaOptionsConfig extends SpeakeasyBase {
    /**
     * An optional field to supply a reCAPTCHA site key to be used for all the rules using the redirect action with the type of GOOGLE_RECAPTCHA under the security policy. The specified site key needs to be created from the reCAPTCHA API. The user is responsible for the validity of the specified site key. If not specified, a Google-managed site key is used.
     */
    redirectSiteKey?: string;
}
