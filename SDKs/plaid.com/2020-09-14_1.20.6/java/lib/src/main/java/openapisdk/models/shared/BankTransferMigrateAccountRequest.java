package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BankTransferMigrateAccountRequest
 * BankTransferMigrateAccountRequest defines the request schema for `/bank_transfer/migrate_account`
**/
public class BankTransferMigrateAccountRequest {
    @JsonProperty("account_number")
    public String accountNumber;
    public BankTransferMigrateAccountRequest withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("account_type")
    public String accountType;
    public BankTransferMigrateAccountRequest withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public BankTransferMigrateAccountRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("routing_number")
    public String routingNumber;
    public BankTransferMigrateAccountRequest withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public BankTransferMigrateAccountRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}