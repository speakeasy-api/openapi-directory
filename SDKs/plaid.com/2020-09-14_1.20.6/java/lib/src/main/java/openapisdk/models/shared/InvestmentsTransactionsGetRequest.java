package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvestmentsTransactionsGetRequest
 * InvestmentsTransactionsGetRequest defines the request schema for `/investments/transactions/get`
**/
public class InvestmentsTransactionsGetRequest {
    @JsonProperty("access_token")
    public String accessToken;
    public InvestmentsTransactionsGetRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public InvestmentsTransactionsGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("end_date")
    public LocalDate endDate;
    public InvestmentsTransactionsGetRequest withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public InvestmentsTransactionsGetRequestOptions options;
    public InvestmentsTransactionsGetRequest withOptions(InvestmentsTransactionsGetRequestOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public InvestmentsTransactionsGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("start_date")
    public LocalDate startDate;
    public InvestmentsTransactionsGetRequest withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
}