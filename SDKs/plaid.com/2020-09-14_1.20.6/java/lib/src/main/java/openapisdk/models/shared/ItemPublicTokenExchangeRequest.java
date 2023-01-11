package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemPublicTokenExchangeRequest
 * ItemPublicTokenExchangeRequest defines the request schema for `/item/public_token/exchange`
**/
public class ItemPublicTokenExchangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public ItemPublicTokenExchangeRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("public_token")
    public String publicToken;
    public ItemPublicTokenExchangeRequest withPublicToken(String publicToken) {
        this.publicToken = publicToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public ItemPublicTokenExchangeRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}