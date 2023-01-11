package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpsertAccountRequestBodyMembersIdentification
 * User identification requires a userId, email or both
**/
public class UpsertAccountRequestBodyMembersIdentification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UpsertAccountRequestBodyMembersIdentification withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public UpsertAccountRequestBodyMembersIdentification withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}