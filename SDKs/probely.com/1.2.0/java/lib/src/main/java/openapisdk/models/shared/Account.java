package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_collection")
    public AccountAutoCollectionEnum autoCollection;
    public Account withAutoCollection(AccountAutoCollectionEnum autoCollection) {
        this.autoCollection = autoCollection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance")
    public Long balance;
    public Account withBalance(Long balance) {
        this.balance = balance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance_currency_code")
    public String balanceCurrencyCode;
    public Account withBalanceCurrencyCode(String balanceCurrencyCode) {
        this.balanceCurrencyCode = balanceCurrencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("free_target_quantity")
    public Long freeTargetQuantity;
    public Account withFreeTargetQuantity(Long freeTargetQuantity) {
        this.freeTargetQuantity = freeTargetQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_used_trial")
    public Boolean hasUsedTrial;
    public Account withHasUsedTrial(Boolean hasUsedTrial) {
        this.hasUsedTrial = hasUsedTrial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heroku")
    public Boolean heroku;
    public Account withHeroku(Boolean heroku) {
        this.heroku = heroku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_billing_at")
    public LocalDate nextBillingAt;
    public Account withNextBillingAt(LocalDate nextBillingAt) {
        this.nextBillingAt = nextBillingAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan")
    public Plan plan;
    public Account withPlan(Plan plan) {
        this.plan = plan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plan_target_quantity")
    public Long planTargetQuantity;
    public Account withPlanTargetQuantity(Long planTargetQuantity) {
        this.planTargetQuantity = planTargetQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pool_size")
    public Long poolSize;
    public Account withPoolSize(Long poolSize) {
        this.poolSize = poolSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AccountStatusEnum status;
    public Account withStatus(AccountStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trialEnd")
    public OffsetDateTime trialEnd;
    public Account withTrialEnd(OffsetDateTime trialEnd) {
        this.trialEnd = trialEnd;
        return this;
    }
}