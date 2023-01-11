package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountType")
    public String accountType;
    public SourceAccountResponse withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public SourceAccountResponse withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balanceVisible")
    public Boolean balanceVisible;
    public SourceAccountResponse withBalanceVisible(Boolean balanceVisible) {
        this.balanceVisible = balanceVisible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public SourceAccountResponseCurrencyEnum currency;
    public SourceAccountResponse withCurrency(SourceAccountResponseCurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public SourceAccountResponse withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingAccountId")
    public String fundingAccountId;
    public SourceAccountResponse withFundingAccountId(String fundingAccountId) {
        this.fundingAccountId = fundingAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingRef")
    public String fundingRef;
    public SourceAccountResponse withFundingRef(String fundingRef) {
        this.fundingRef = fundingRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public SourceAccountResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SourceAccountResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public SourceAccountResponse withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physicalAccountId")
    public String physicalAccountId;
    public SourceAccountResponse withPhysicalAccountId(String physicalAccountId) {
        this.physicalAccountId = physicalAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physicalAccountName")
    public String physicalAccountName;
    public SourceAccountResponse withPhysicalAccountName(String physicalAccountName) {
        this.physicalAccountName = physicalAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pooled")
    public Boolean pooled;
    public SourceAccountResponse withPooled(Boolean pooled) {
        this.pooled = pooled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("railsId")
    public String railsId;
    public SourceAccountResponse withRailsId(String railsId) {
        this.railsId = railsId;
        return this;
    }
}