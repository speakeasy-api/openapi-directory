package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncomeVerificationPaystubsGetRequest
 * IncomeVerificationPaystubsGetRequest defines the request schema for `/income/verification/paystubs/get`.
**/
public class IncomeVerificationPaystubsGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public IncomeVerificationPaystubsGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("income_verification_id")
    public String incomeVerificationId;
    public IncomeVerificationPaystubsGetRequest withIncomeVerificationId(String incomeVerificationId) {
        this.incomeVerificationId = incomeVerificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public IncomeVerificationPaystubsGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}