package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkRequestBodyIdentification
 * User identification requires a userId, email or both
**/
public class LinkRequestBodyIdentification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public LinkRequestBodyIdentification withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public LinkRequestBodyIdentification withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}