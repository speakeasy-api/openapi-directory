package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceAccountResponseV2 {
    @JsonProperty("accountType")
    public String accountType;
    public SourceAccountResponseV2 withAccountType(String accountType) {
        this.accountType = accountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoTopUpConfig")
    public AutoTopUpConfig autoTopUpConfig;
    public SourceAccountResponseV2 withAutoTopUpConfig(AutoTopUpConfig autoTopUpConfig) {
        this.autoTopUpConfig = autoTopUpConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public SourceAccountResponseV2 withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonProperty("balanceVisible")
    public Boolean balanceVisible;
    public SourceAccountResponseV2 withBalanceVisible(Boolean balanceVisible) {
        this.balanceVisible = balanceVisible;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public SourceAccountResponseV2CurrencyEnum currency;
    public SourceAccountResponseV2 withCurrency(SourceAccountResponseV2CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public SourceAccountResponseV2 withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundingAccountId")
    public String fundingAccountId;
    public SourceAccountResponseV2 withFundingAccountId(String fundingAccountId) {
        this.fundingAccountId = fundingAccountId;
        return this;
    }
    @JsonProperty("fundingRef")
    public String fundingRef;
    public SourceAccountResponseV2 withFundingRef(String fundingRef) {
        this.fundingRef = fundingRef;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SourceAccountResponseV2 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SourceAccountResponseV2 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public Notifications notifications;
    public SourceAccountResponseV2 withNotifications(Notifications notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public SourceAccountResponseV2 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("physicalAccountId")
    public String physicalAccountId;
    public SourceAccountResponseV2 withPhysicalAccountId(String physicalAccountId) {
        this.physicalAccountId = physicalAccountId;
        return this;
    }
    @JsonProperty("physicalAccountName")
    public String physicalAccountName;
    public SourceAccountResponseV2 withPhysicalAccountName(String physicalAccountName) {
        this.physicalAccountName = physicalAccountName;
        return this;
    }
    @JsonProperty("pooled")
    public Boolean pooled;
    public SourceAccountResponseV2 withPooled(Boolean pooled) {
        this.pooled = pooled;
        return this;
    }
    @JsonProperty("railsId")
    public String railsId;
    public SourceAccountResponseV2 withRailsId(String railsId) {
        this.railsId = railsId;
        return this;
    }
}