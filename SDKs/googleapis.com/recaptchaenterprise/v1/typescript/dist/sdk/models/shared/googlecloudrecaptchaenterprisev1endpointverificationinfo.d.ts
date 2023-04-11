import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a verification endpoint that can be used for 2FA.
 */
export declare class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput extends SpeakeasyBase {
    /**
     * Email address for which to trigger a verification request.
     */
    emailAddress?: string;
    /**
     * Phone number for which to trigger a verification request. Should be given in E.164 format.
     */
    phoneNumber?: string;
}
/**
 * Information about a verification endpoint that can be used for 2FA.
 */
export declare class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo extends SpeakeasyBase {
    /**
     * Email address for which to trigger a verification request.
     */
    emailAddress?: string;
    /**
     * Output only. Timestamp of the last successful verification for the endpoint, if any.
     */
    lastVerificationTime?: string;
    /**
     * Phone number for which to trigger a verification request. Should be given in E.164 format.
     */
    phoneNumber?: string;
    /**
     * Output only. Token to provide to the client to trigger endpoint verification. It must be used within 15 minutes.
     */
    requestToken?: string;
}
