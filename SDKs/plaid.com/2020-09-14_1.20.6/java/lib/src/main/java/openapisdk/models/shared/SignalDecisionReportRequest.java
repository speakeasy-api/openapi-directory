package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignalDecisionReportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SignalDecisionReportRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("client_transaction_id")
    public String clientTransactionId;
    public SignalDecisionReportRequest withClientTransactionId(String clientTransactionId) {
        this.clientTransactionId = clientTransactionId;
        return this;
    }
    @JsonProperty("initiated")
    public Boolean initiated;
    public SignalDecisionReportRequest withInitiated(Boolean initiated) {
        this.initiated = initiated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SignalDecisionReportRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}