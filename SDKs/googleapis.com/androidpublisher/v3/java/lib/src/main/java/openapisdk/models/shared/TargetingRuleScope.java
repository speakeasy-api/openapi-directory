package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetingRuleScope
 * Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
**/
public class TargetingRuleScope {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specificSubscriptionInApp")
    public String specificSubscriptionInApp;
    public TargetingRuleScope withSpecificSubscriptionInApp(String specificSubscriptionInApp) {
        this.specificSubscriptionInApp = specificSubscriptionInApp;
        return this;
    }
}