package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudBillingBudgetsV1ThresholdRule
 * ThresholdRule contains the definition of a threshold. Threshold rules define the triggering events used to generate a budget notification email. When a threshold is crossed (spend exceeds the specified percentages of the budget), budget alert emails are sent to the email recipients you specify in the [NotificationsRule](#notificationsrule). Threshold rules also affect the fields included in the [JSON data object](https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format) sent to a Pub/Sub topic. Threshold rules are _required_ if using email notifications. Threshold rules are _optional_ if only setting a [`pubsubTopic` NotificationsRule](#NotificationsRule), unless you want your JSON data object to include data about the thresholds you set. For more information, see [set budget threshold rules and actions](https://cloud.google.com/billing/docs/how-to/budgets#budget-actions).
**/
public class GoogleCloudBillingBudgetsV1ThresholdRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spendBasis")
    public GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum spendBasis;
    public GoogleCloudBillingBudgetsV1ThresholdRule withSpendBasis(GoogleCloudBillingBudgetsV1ThresholdRuleSpendBasisEnum spendBasis) {
        this.spendBasis = spendBasis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thresholdPercent")
    public Double thresholdPercent;
    public GoogleCloudBillingBudgetsV1ThresholdRule withThresholdPercent(Double thresholdPercent) {
        this.thresholdPercent = thresholdPercent;
        return this;
    }
}