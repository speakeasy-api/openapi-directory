package shared

type GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum string

const (
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumResultUnspecified                 GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "RESULT_UNSPECIFIED"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumSuccessUserVerified               GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "SUCCESS_USER_VERIFIED"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumErrorUserNotVerified              GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "ERROR_USER_NOT_VERIFIED"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumErrorSiteOnboardingIncomplete     GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "ERROR_SITE_ONBOARDING_INCOMPLETE"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumErrorRecipientNotAllowed          GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "ERROR_RECIPIENT_NOT_ALLOWED"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumErrorRecipientAbuseLimitExhausted GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumErrorCriticalInternal             GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "ERROR_CRITICAL_INTERNAL"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumErrorCustomerQuotaExhausted       GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "ERROR_CUSTOMER_QUOTA_EXHAUSTED"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumErrorVerificationBypassed         GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "ERROR_VERIFICATION_BYPASSED"
	GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnumErrorVerdictMismatch              GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum = "ERROR_VERDICT_MISMATCH"
)

// GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput
// Information about account verification, used for identity verification.
type GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput struct {
	Endpoints    []GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput `json:"endpoints,omitempty"`
	LanguageCode *string                                                         `json:"languageCode,omitempty"`
	Username     *string                                                         `json:"username,omitempty"`
}

// GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo
// Information about account verification, used for identity verification.
type GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo struct {
	Endpoints                []GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo                           `json:"endpoints,omitempty"`
	LanguageCode             *string                                                                              `json:"languageCode,omitempty"`
	LatestVerificationResult *GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum `json:"latestVerificationResult,omitempty"`
	Username                 *string                                                                              `json:"username,omitempty"`
}
