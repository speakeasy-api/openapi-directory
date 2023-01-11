package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResetPasswordRequest {
    @JsonProperty("email")
    public String email;
    public ResetPasswordRequest withEmail(String email) {
        this.email = email;
        return this;
    }
}