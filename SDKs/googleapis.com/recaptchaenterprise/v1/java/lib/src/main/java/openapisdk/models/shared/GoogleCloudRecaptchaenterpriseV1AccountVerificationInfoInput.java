package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput
 * Information about account verification, used for identity verification.
**/
public class GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoints")
    public GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput[] endpoints;
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput withEndpoints(GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput[] endpoints) {
        this.endpoints = endpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public GoogleCloudRecaptchaenterpriseV1AccountVerificationInfoInput withUsername(String username) {
        this.username = username;
        return this;
    }
}