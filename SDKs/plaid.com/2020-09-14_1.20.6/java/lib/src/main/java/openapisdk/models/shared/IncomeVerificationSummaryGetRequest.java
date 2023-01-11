package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncomeVerificationSummaryGetRequest
 * IncomeVerificationSummaryGetRequest defines the request schema for `/income/verification/summary/get`.
**/
public class IncomeVerificationSummaryGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public IncomeVerificationSummaryGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("income_verification_id")
    public String incomeVerificationId;
    public IncomeVerificationSummaryGetRequest withIncomeVerificationId(String incomeVerificationId) {
        this.incomeVerificationId = incomeVerificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public IncomeVerificationSummaryGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}