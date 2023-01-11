package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransactionsGetRequest
 * TransactionsGetRequest defines the request schema for `/transactions/get`
**/
public class TransactionsGetRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public TransactionsGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public TransactionsGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("end_date")
    public LocalDate endDate;
    public TransactionsGetRequest withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public TransactionsGetRequestOptions options;
    public TransactionsGetRequest withOptions(TransactionsGetRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public TransactionsGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("start_date")
    public LocalDate startDate;
    public TransactionsGetRequest withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}