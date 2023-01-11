package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ItemImportRequestUserAuth
 * Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
**/
public class ItemImportRequestUserAuth {
    @JsonProperty("auth_token")
    public String authToken;
    public ItemImportRequestUserAuth withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
    @JsonProperty("user_id")
    public String userId;
    public ItemImportRequestUserAuth withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}