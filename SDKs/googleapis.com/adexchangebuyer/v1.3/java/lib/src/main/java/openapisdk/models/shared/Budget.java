package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Budget
 * The configuration data for Ad Exchange RTB - Budget API.
**/
public class Budget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public Budget withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingId")
    public String billingId;
    public Budget withBillingId(String billingId) {
        this.billingId = billingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetAmount")
    public String budgetAmount;
    public Budget withBudgetAmount(String budgetAmount) {
        this.budgetAmount = budgetAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public Budget withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Budget withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Budget withKind(String kind) {
        this.kind = kind;
        return this;
    }
}