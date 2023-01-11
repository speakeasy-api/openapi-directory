package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransactionsRefreshRequest
 * TransactionsRefreshRequest defines the request schema for `/transactions/refresh`
**/
public class TransactionsRefreshRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public TransactionsRefreshRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public TransactionsRefreshRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public TransactionsRefreshRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}