package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RemoveUserFromAccountRequestBody
 * The user being added/removed from the account
**/
public class RemoveUserFromAccountRequestBody {
    @JsonProperty("userId")
    public String userId;
    public RemoveUserFromAccountRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}