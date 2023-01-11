package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PhoneVerifyResponse {
    @JsonProperty("calling")
    public Boolean calling;
    public PhoneVerifyResponse withCalling(Boolean calling) {
        this.calling = calling;
        return this;
    }
    @JsonProperty("numberValid")
    public Boolean numberValid;
    public PhoneVerifyResponse withNumberValid(Boolean numberValid) {
        this.numberValid = numberValid;
        return this;
    }
    @JsonProperty("securityCode")
    public String securityCode;
    public PhoneVerifyResponse withSecurityCode(String securityCode) {
        this.securityCode = securityCode;
        return this;
    }
}