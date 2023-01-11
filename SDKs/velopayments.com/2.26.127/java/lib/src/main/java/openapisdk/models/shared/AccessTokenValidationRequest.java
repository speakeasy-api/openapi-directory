package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccessTokenValidationRequest {
    @JsonProperty("otp")
    public String otp;
    public AccessTokenValidationRequest withOtp(String otp) {
        this.otp = otp;
        return this;
    }
}