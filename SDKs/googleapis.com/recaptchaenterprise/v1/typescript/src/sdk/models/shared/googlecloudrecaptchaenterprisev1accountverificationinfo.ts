import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput } from "./googlecloudrecaptchaenterprisev1endpointverificationinfo";
import { GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo } from "./googlecloudrecaptchaenterprisev1endpointverificationinfo";


export enum GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum {
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


// GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput
/** 
 * Information about account verification, used for identity verification.
**/
export class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput })
  endpoints?: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


// GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo
/** 
 * Information about account verification, used for identity verification.
**/
export class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo })
  endpoints?: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=latestVerificationResult" })
  latestVerificationResult?: GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
