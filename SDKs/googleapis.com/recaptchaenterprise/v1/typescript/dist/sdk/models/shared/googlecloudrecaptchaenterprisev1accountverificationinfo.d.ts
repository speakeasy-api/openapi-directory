import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo, GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput } from "./googlecloudrecaptchaenterprisev1endpointverificationinfo";
/**
 * Information about account verification, used for identity verification.
 */
export declare class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput extends SpeakeasyBase {
    /**
     * Endpoints that can be used for identity verification.
     */
    endpoints?: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput[];
    /**
     * Language code preference for the verification message, set as a IETF BCP 47 language code.
     */
    languageCode?: string;
    /**
     * Username of the account that is being verified. Deprecated. Customers should now provide the hashed account ID field in Event.
     */
    username?: string;
}
/**
 * Output only. Result of the latest account verification challenge.
 */
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
 */
export declare class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo extends SpeakeasyBase {
    /**
     * Endpoints that can be used for identity verification.
     */
    endpoints?: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo[];
    /**
     * Language code preference for the verification message, set as a IETF BCP 47 language code.
     */
    languageCode?: string;
    /**
     * Output only. Result of the latest account verification challenge.
     */
    latestVerificationResult?: GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum;
    /**
     * Username of the account that is being verified. Deprecated. Customers should now provide the hashed account ID field in Event.
     */
    username?: string;
}
