package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvestmentsHoldingsGetRequest
 * InvestmentsHoldingsGetRequest defines the request schema for `/investments/holdings/get`
**/
public class InvestmentsHoldingsGetRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public InvestmentsHoldingsGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public InvestmentsHoldingsGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public InvestmentHoldingsGetRequestOptions options;
    public InvestmentsHoldingsGetRequest withOptions(InvestmentHoldingsGetRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public InvestmentsHoldingsGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}