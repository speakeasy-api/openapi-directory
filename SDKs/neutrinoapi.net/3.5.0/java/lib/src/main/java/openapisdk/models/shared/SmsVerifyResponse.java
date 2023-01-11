package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SmsVerifyResponse {
    @JsonProperty("numberValid")
    public Boolean numberValid;
    public SmsVerifyResponse withNumberValid(Boolean numberValid) {
        this.numberValid = numberValid;
        return this;
    }
    @JsonProperty("securityCode")
    public String securityCode;
    public SmsVerifyResponse withSecurityCode(String securityCode) {
        this.securityCode = securityCode;
        return this;
    }
    @JsonProperty("sent")
    public Boolean sent;
    public SmsVerifyResponse withSent(Boolean sent) {
        this.sent = sent;
        return this;
    }
}