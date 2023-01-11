package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncomeVerificationRefreshRequest
 * IncomeVerificationRefreshRequest defines the request schema for `/income/verification/refresh`
**/
public class IncomeVerificationRefreshRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public IncomeVerificationRefreshRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("income_verification_id")
    public String incomeVerificationId;
    public IncomeVerificationRefreshRequest withIncomeVerificationId(String incomeVerificationId) {
        this.incomeVerificationId = incomeVerificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public IncomeVerificationRefreshRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}