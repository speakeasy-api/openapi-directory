package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1Assessment
 * A recaptcha assessment resource.
**/
public class GoogleCloudRecaptchaenterpriseV1Assessment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountDefenderAssessment")
    public GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment accountDefenderAssessment;
    public GoogleCloudRecaptchaenterpriseV1Assessment withAccountDefenderAssessment(GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment accountDefenderAssessment) {
        this.accountDefenderAssessment = accountDefenderAssessment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountVerification")
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo accountVerification;
    public GoogleCloudRecaptchaenterpriseV1Assessment withAccountVerification(GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo accountVerification) {
        this.accountVerification = accountVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public GoogleCloudRecaptchaenterpriseV1Event event;
    public GoogleCloudRecaptchaenterpriseV1Assessment withEvent(GoogleCloudRecaptchaenterpriseV1Event event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecaptchaenterpriseV1Assessment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privatePasswordLeakVerification")
    public GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification privatePasswordLeakVerification;
    public GoogleCloudRecaptchaenterpriseV1Assessment withPrivatePasswordLeakVerification(GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification privatePasswordLeakVerification) {
        this.privatePasswordLeakVerification = privatePasswordLeakVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("riskAnalysis")
    public GoogleCloudRecaptchaenterpriseV1RiskAnalysis riskAnalysis;
    public GoogleCloudRecaptchaenterpriseV1Assessment withRiskAnalysis(GoogleCloudRecaptchaenterpriseV1RiskAnalysis riskAnalysis) {
        this.riskAnalysis = riskAnalysis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenProperties")
    public GoogleCloudRecaptchaenterpriseV1TokenProperties tokenProperties;
    public GoogleCloudRecaptchaenterpriseV1Assessment withTokenProperties(GoogleCloudRecaptchaenterpriseV1TokenProperties tokenProperties) {
        this.tokenProperties = tokenProperties;
        return this;
    }
}