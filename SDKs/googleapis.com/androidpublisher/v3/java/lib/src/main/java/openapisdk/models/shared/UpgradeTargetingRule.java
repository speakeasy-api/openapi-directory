package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpgradeTargetingRule
 * Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
**/
public class UpgradeTargetingRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodDuration")
    public String billingPeriodDuration;
    public UpgradeTargetingRule withBillingPeriodDuration(String billingPeriodDuration) {
        this.billingPeriodDuration = billingPeriodDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oncePerUser")
    public Boolean oncePerUser;
    public UpgradeTargetingRule withOncePerUser(Boolean oncePerUser) {
        this.oncePerUser = oncePerUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public TargetingRuleScope scope;
    public UpgradeTargetingRule withScope(TargetingRuleScope scope) {
        this.scope = scope;
        return this;
    }
}