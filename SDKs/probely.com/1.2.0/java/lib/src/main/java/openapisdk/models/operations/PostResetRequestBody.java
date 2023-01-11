package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostResetRequestBody {
    @JsonProperty("email")
    public String email;
    public PostResetRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
}