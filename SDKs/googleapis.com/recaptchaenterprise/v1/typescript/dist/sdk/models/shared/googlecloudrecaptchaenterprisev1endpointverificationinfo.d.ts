import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a verification endpoint that can be used for 2FA.
**/
export declare class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput extends SpeakeasyBase {
    emailAddress?: string;
    phoneNumber?: string;
}
/**
 * Information about a verification endpoint that can be used for 2FA.
**/
export declare class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo extends SpeakeasyBase {
    emailAddress?: string;
    lastVerificationTime?: string;
    phoneNumber?: string;
    requestToken?: string;
}
