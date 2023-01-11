package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemAccessTokenInvalidateRequest
 * ItemAccessTokenInvalidateRequest defines the request schema for `/item/access_token/invalidate`
**/
public class ItemAccessTokenInvalidateRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ItemAccessTokenInvalidateRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemAccessTokenInvalidateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemAccessTokenInvalidateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}