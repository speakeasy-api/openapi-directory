package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountsBalanceGetRequest
 * AccountsBalanceGetRequest defines the request schema for `/accounts/balance/get`
**/
public class AccountsBalanceGetRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public AccountsBalanceGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AccountsBalanceGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public AccountsBalanceGetRequestOptions options;
    public AccountsBalanceGetRequest withOptions(AccountsBalanceGetRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AccountsBalanceGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}