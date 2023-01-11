package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LinkTokenGetRequest
 * LinkTokenGetRequest defines the request schema for `/link/token/get`
**/
public class LinkTokenGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public LinkTokenGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("link_token")
    public String linkToken;
    public LinkTokenGetRequest withLinkToken(String linkToken) {
        this.linkToken = linkToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public LinkTokenGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}