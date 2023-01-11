package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AddUserToAccountRequestBody
 * The user being added/removed from the account
**/
public class AddUserToAccountRequestBody {
    @JsonProperty("userId")
    public String userId;
    public AddUserToAccountRequestBody withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}