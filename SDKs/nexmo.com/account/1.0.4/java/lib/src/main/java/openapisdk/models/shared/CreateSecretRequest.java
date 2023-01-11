package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSecretRequest {
    @JsonProperty("secret")
    public String secret;
    public CreateSecretRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}