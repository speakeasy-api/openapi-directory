package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BankTransferGetRequest
 * BankTransferGetRequest defines the request schema for `/bank_transfer/get`
**/
public class BankTransferGetRequest {
    @JsonProperty("bank_transfer_id")
    public String bankTransferId;
    public BankTransferGetRequest withBankTransferId(String bankTransferId) {
        this.bankTransferId = bankTransferId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public BankTransferGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public BankTransferGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}