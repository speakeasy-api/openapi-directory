import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput } from "./googlecloudrecaptchaenterprisev1endpointverificationinfo";
import { GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo } from "./googlecloudrecaptchaenterprisev1endpointverificationinfo";
export declare enum GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED",
    SuccessUserVerified = "SUCCESS_USER_VERIFIED",
    ErrorUserNotVerified = "ERROR_USER_NOT_VERIFIED",
    ErrorSiteOnboardingIncomplete = "ERROR_SITE_ONBOARDING_INCOMPLETE",
    ErrorRecipientNotAllowed = "ERROR_RECIPIENT_NOT_ALLOWED",
    ErrorRecipientAbuseLimitExhausted = "ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED",
    ErrorCriticalInternal = "ERROR_CRITICAL_INTERNAL",
    ErrorCustomerQuotaExhausted = "ERROR_CUSTOMER_QUOTA_EXHAUSTED",
    ErrorVerificationBypassed = "ERROR_VERIFICATION_BYPASSED",
    ErrorVerdictMismatch = "ERROR_VERDICT_MISMATCH"
}
/**
 * Information about account verification, used for identity verification.
**/
export declare class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput extends SpeakeasyBase {
    endpoints?: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput[];
    languageCode?: string;
    username?: string;
}
/**
 * Information about account verification, used for identity verification.
**/
export declare class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo extends SpeakeasyBase {
    endpoints?: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo[];
    languageCode?: string;
    latestVerificationResult?: GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum;
    username?: string;
}
