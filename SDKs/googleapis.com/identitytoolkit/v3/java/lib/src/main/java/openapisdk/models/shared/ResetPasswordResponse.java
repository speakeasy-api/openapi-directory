package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResetPasswordResponse
 * Response of resetting the password.
**/
public class ResetPasswordResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ResetPasswordResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ResetPasswordResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newEmail")
    public String newEmail;
    public ResetPasswordResponse withNewEmail(String newEmail) {
        this.newEmail = newEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestType")
    public String requestType;
    public ResetPasswordResponse withRequestType(String requestType) {
        this.requestType = requestType;
        return this;
    }
}