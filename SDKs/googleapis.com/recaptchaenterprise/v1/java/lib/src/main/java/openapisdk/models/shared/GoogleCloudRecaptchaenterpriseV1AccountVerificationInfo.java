package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo
 * Information about account verification, used for identity verification.
**/
public class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoints")
    public GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo[] endpoints;
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo withEndpoints(GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo[] endpoints) {
        this.endpoints = endpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestVerificationResult")
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum latestVerificationResult;
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo withLatestVerificationResult(GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoLatestVerificationResultEnum latestVerificationResult) {
        this.latestVerificationResult = latestVerificationResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo withUsername(String username) {
        this.username = username;
        return this;
    }
}