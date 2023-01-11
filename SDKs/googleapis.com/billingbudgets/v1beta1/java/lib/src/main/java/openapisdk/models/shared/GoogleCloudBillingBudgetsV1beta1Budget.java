package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1beta1Budget
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
public class GoogleCloudBillingBudgetsV1beta1Budget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allUpdatesRule")
    public GoogleCloudBillingBudgetsV1beta1AllUpdatesRule allUpdatesRule;
    public GoogleCloudBillingBudgetsV1beta1Budget withAllUpdatesRule(GoogleCloudBillingBudgetsV1beta1AllUpdatesRule allUpdatesRule) {
        this.allUpdatesRule = allUpdatesRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public GoogleCloudBillingBudgetsV1beta1BudgetAmount amount;
    public GoogleCloudBillingBudgetsV1beta1Budget withAmount(GoogleCloudBillingBudgetsV1beta1BudgetAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetFilter")
    public GoogleCloudBillingBudgetsV1beta1Filter budgetFilter;
    public GoogleCloudBillingBudgetsV1beta1Budget withBudgetFilter(GoogleCloudBillingBudgetsV1beta1Filter budgetFilter) {
        this.budgetFilter = budgetFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudBillingBudgetsV1beta1Budget withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudBillingBudgetsV1beta1Budget withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudBillingBudgetsV1beta1Budget withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thresholdRules")
    public GoogleCloudBillingBudgetsV1beta1ThresholdRule[] thresholdRules;
    public GoogleCloudBillingBudgetsV1beta1Budget withThresholdRules(GoogleCloudBillingBudgetsV1beta1ThresholdRule[] thresholdRules) {
        this.thresholdRules = thresholdRules;
        return this;
    }
}