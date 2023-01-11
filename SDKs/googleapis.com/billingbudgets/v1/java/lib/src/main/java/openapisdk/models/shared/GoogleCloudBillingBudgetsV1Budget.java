package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1Budget
 * A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
**/
public class GoogleCloudBillingBudgetsV1Budget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public GoogleCloudBillingBudgetsV1BudgetAmount amount;
    public GoogleCloudBillingBudgetsV1Budget withAmount(GoogleCloudBillingBudgetsV1BudgetAmount amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("budgetFilter")
    public GoogleCloudBillingBudgetsV1Filter budgetFilter;
    public GoogleCloudBillingBudgetsV1Budget withBudgetFilter(GoogleCloudBillingBudgetsV1Filter budgetFilter) {
        this.budgetFilter = budgetFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudBillingBudgetsV1Budget withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudBillingBudgetsV1Budget withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudBillingBudgetsV1Budget withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notificationsRule")
    public GoogleCloudBillingBudgetsV1NotificationsRule notificationsRule;
    public GoogleCloudBillingBudgetsV1Budget withNotificationsRule(GoogleCloudBillingBudgetsV1NotificationsRule notificationsRule) {
        this.notificationsRule = notificationsRule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thresholdRules")
    public GoogleCloudBillingBudgetsV1ThresholdRule[] thresholdRules;
    public GoogleCloudBillingBudgetsV1Budget withThresholdRules(GoogleCloudBillingBudgetsV1ThresholdRule[] thresholdRules) {
        this.thresholdRules = thresholdRules;
        return this;
    }
}