import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.
 */
export declare class GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse extends SpeakeasyBase {
    /**
     * The secret key (also known as shared secret) authorizes communication between your application backend and the reCAPTCHA Enterprise server to create an assessment. The secret key needs to be kept safe for security purposes.
     */
    legacySecretKey?: string;
}
