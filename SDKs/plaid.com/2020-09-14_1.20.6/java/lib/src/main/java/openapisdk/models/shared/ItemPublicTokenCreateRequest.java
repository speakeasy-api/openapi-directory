package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemPublicTokenCreateRequest
 * ItemPublicTokenCreateRequest defines the request schema for `/item/public_token/create`
**/
public class ItemPublicTokenCreateRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ItemPublicTokenCreateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemPublicTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemPublicTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}