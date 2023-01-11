package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartySendVerificationCodeRequest
 * Request for Identitytoolkit-SendVerificationCode
**/
public class IdentitytoolkitRelyingpartySendVerificationCodeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosReceipt")
    public String iosReceipt;
    public IdentitytoolkitRelyingpartySendVerificationCodeRequest withIosReceipt(String iosReceipt) {
        this.iosReceipt = iosReceipt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosSecret")
    public String iosSecret;
    public IdentitytoolkitRelyingpartySendVerificationCodeRequest withIosSecret(String iosSecret) {
        this.iosSecret = iosSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public IdentitytoolkitRelyingpartySendVerificationCodeRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recaptchaToken")
    public String recaptchaToken;
    public IdentitytoolkitRelyingpartySendVerificationCodeRequest withRecaptchaToken(String recaptchaToken) {
        this.recaptchaToken = recaptchaToken;
        return this;
    }
}