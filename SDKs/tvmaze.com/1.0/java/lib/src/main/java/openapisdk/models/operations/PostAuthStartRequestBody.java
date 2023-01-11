package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAuthStartRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PostAuthStartRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_confirmation")
    public Boolean emailConfirmation;
    public PostAuthStartRequestBody withEmailConfirmation(Boolean emailConfirmation) {
        this.emailConfirmation = emailConfirmation;
        return this;
    }
}