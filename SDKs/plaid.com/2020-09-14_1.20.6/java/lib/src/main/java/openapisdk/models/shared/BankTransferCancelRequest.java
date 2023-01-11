package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BankTransferCancelRequest
 * BankTransferCancelRequest defines the request schema for `/bank_transfer/cancel`
**/
public class BankTransferCancelRequest {
    @JsonProperty("bank_transfer_id")
    public String bankTransferId;
    public BankTransferCancelRequest withBankTransferId(String bankTransferId) {
        this.bankTransferId = bankTransferId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public BankTransferCancelRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public BankTransferCancelRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}