package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BankTransferEventSyncRequest
 * BankTransferEventSyncRequest defines the request schema for `/bank_transfer/event/sync`
**/
public class BankTransferEventSyncRequest {
    @JsonProperty("after_id")
    public Long afterId;
    public BankTransferEventSyncRequest withAfterId(Long afterId) {
        this.afterId = afterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public BankTransferEventSyncRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public BankTransferEventSyncRequest withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public BankTransferEventSyncRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}