package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemRemoveRequest
 * ItemRemoveRequest defines the request schema for `/item/remove`
**/
public class ItemRemoveRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public ItemRemoveRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemRemoveRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemRemoveRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}