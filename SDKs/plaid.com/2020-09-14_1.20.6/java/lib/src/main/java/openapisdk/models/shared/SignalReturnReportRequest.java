package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SignalReturnReportRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SignalReturnReportRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("client_transaction_id")
    public String clientTransactionId;
    public SignalReturnReportRequest withClientTransactionId(String clientTransactionId) {
        this.clientTransactionId = clientTransactionId;
        return this;
    }
    @JsonProperty("return_code")
    public String returnCode;
    public SignalReturnReportRequest withReturnCode(String returnCode) {
        this.returnCode = returnCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SignalReturnReportRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}