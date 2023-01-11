package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1AssessmentInput
 * A recaptcha assessment resource.
**/
public class GoogleCloudRecaptchaenterpriseV1AssessmentInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountDefenderAssessment")
    public GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment accountDefenderAssessment;
    public GoogleCloudRecaptchaenterpriseV1AssessmentInput withAccountDefenderAssessment(GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment accountDefenderAssessment) {
        this.accountDefenderAssessment = accountDefenderAssessment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountVerification")
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput accountVerification;
    public GoogleCloudRecaptchaenterpriseV1AssessmentInput withAccountVerification(GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput accountVerification) {
        this.accountVerification = accountVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public GoogleCloudRecaptchaenterpriseV1Event event;
    public GoogleCloudRecaptchaenterpriseV1AssessmentInput withEvent(GoogleCloudRecaptchaenterpriseV1Event event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privatePasswordLeakVerification")
    public GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput privatePasswordLeakVerification;
    public GoogleCloudRecaptchaenterpriseV1AssessmentInput withPrivatePasswordLeakVerification(GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerificationInput privatePasswordLeakVerification) {
        this.privatePasswordLeakVerification = privatePasswordLeakVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riskAnalysis")
    public GoogleCloudRecaptchaenterpriseV1RiskAnalysis riskAnalysis;
    public GoogleCloudRecaptchaenterpriseV1AssessmentInput withRiskAnalysis(GoogleCloudRecaptchaenterpriseV1RiskAnalysis riskAnalysis) {
        this.riskAnalysis = riskAnalysis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenProperties")
    public GoogleCloudRecaptchaenterpriseV1TokenProperties tokenProperties;
    public GoogleCloudRecaptchaenterpriseV1AssessmentInput withTokenProperties(GoogleCloudRecaptchaenterpriseV1TokenProperties tokenProperties) {
        this.tokenProperties = tokenProperties;
        return this;
    }
}