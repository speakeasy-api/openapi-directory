package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo
 * Information about a verification endpoint that can be used for 2FA.
**/
public class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastVerificationTime")
    public String lastVerificationTime;
    public GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo withLastVerificationTime(String lastVerificationTime) {
        this.lastVerificationTime = lastVerificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestToken")
    public String requestToken;
    public GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo withRequestToken(String requestToken) {
        this.requestToken = requestToken;
        return this;
    }
}