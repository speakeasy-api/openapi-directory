package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountsGetRequest
 * AccountsGetRequest defines the request schema for `/accounts/get`
**/
public class AccountsGetRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public AccountsGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public AccountsGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public AccountsGetRequestOptions options;
    public AccountsGetRequest withOptions(AccountsGetRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public AccountsGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}