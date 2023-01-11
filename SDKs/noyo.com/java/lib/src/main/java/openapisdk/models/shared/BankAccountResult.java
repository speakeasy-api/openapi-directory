package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BankAccountResult {
    @JsonProperty("account_number")
    public String accountNumber;
    public BankAccountResult withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonProperty("application_id")
    public String applicationId;
    public BankAccountResult withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("bank_name")
    public String bankName;
    public BankAccountResult withBankName(String bankName) {
        this.bankName = bankName;
        return this;
    }
    @JsonProperty("created")
    public Long created;
    public BankAccountResult withCreated(Long created) {
        this.created = created;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public BankAccountResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("is_checking")
    public Boolean isChecking;
    public BankAccountResult withIsChecking(Boolean isChecking) {
        this.isChecking = isChecking;
        return this;
    }
    @JsonProperty("modified")
    public Long modified;
    public BankAccountResult withModified(Long modified) {
        this.modified = modified;
        return this;
    }
    @JsonProperty("routing_number")
    public String routingNumber;
    public BankAccountResult withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    @JsonProperty("status")
    public BankAccountResultStatusEnum status;
    public BankAccountResult withStatus(BankAccountResultStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public BankAccountResult withVersion(String version) {
        this.version = version;
        return this;
    }
}