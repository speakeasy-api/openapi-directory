package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VerifySecurityCodeResponse {
    @JsonProperty("verified")
    public Boolean verified;
    public VerifySecurityCodeResponse withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}