package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoRenewingPlan
 * Information related to an auto renewing plan.
**/
public class AutoRenewingPlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRenewEnabled")
    public Boolean autoRenewEnabled;
    public AutoRenewingPlan withAutoRenewEnabled(Boolean autoRenewEnabled) {
        this.autoRenewEnabled = autoRenewEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceChangeDetails")
    public SubscriptionItemPriceChangeDetails priceChangeDetails;
    public AutoRenewingPlan withPriceChangeDetails(SubscriptionItemPriceChangeDetails priceChangeDetails) {
        this.priceChangeDetails = priceChangeDetails;
        return this;
    }
}