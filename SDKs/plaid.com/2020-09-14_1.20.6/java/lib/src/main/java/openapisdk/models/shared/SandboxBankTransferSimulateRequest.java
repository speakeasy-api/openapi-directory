package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SandboxBankTransferSimulateRequest
 * SandboxBankTransferSimulateRequest defines the request schema for `/sandbox/bank_transfer/simulate`
**/
public class SandboxBankTransferSimulateRequest {
    @JsonProperty("bank_transfer_id")
    public String bankTransferId;
    public SandboxBankTransferSimulateRequest withBankTransferId(String bankTransferId) {
        this.bankTransferId = bankTransferId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public SandboxBankTransferSimulateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("event_type")
    public String eventType;
    public SandboxBankTransferSimulateRequest withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failure_reason")
    public java.util.Map<String, Object> failureReason;
    public SandboxBankTransferSimulateRequest withFailureReason(java.util.Map<String, Object> failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SandboxBankTransferSimulateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}