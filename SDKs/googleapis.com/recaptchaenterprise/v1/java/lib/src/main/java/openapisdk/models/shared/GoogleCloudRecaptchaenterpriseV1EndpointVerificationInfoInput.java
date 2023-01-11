package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput
 * Information about a verification endpoint that can be used for 2FA.
**/
public class GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddress")
    public String emailAddress;
    public GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfoInput withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}