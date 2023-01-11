package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemGetRequest
 * ItemGetRequest defines the request schema for `/item/get`
**/
public class ItemGetRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ItemGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}