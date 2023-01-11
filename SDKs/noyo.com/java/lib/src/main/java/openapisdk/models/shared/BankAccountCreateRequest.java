package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BankAccountCreateRequest {
    @JsonProperty("account_number")
    public String accountNumber;
    public BankAccountCreateRequest withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("bank_name")
    public String bankName;
    public BankAccountCreateRequest withBankName(String bankName) {
        this.bankName = bankName;
        return this;
    }
    @JsonProperty("is_checking")
    public Boolean isChecking;
    public BankAccountCreateRequest withIsChecking(Boolean isChecking) {
        this.isChecking = isChecking;
        return this;
    }
    @JsonProperty("routing_number")
    public String routingNumber;
    public BankAccountCreateRequest withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
}