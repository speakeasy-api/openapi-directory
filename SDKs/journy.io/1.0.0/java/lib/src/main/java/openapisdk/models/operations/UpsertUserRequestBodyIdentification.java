package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsertUserRequestBodyIdentification
 * User identification requires a userId, email or both
**/
public class UpsertUserRequestBodyIdentification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UpsertUserRequestBodyIdentification withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public UpsertUserRequestBodyIdentification withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}