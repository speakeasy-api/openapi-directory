package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResendTokenRequest {
    @JsonProperty("tokenType")
    public ResendTokenRequestTokenTypeEnum tokenType;
    public ResendTokenRequest withTokenType(ResendTokenRequestTokenTypeEnum tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationCode")
    public String verificationCode;
    public ResendTokenRequest withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
}