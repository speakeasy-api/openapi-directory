package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrepaidBasePlanType
 * Represents a base plan that does not automatically renew at the end of the base plan, and must be manually renewed by the user.
**/
public class PrepaidBasePlanType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodDuration")
    public String billingPeriodDuration;
    public PrepaidBasePlanType withBillingPeriodDuration(String billingPeriodDuration) {
        this.billingPeriodDuration = billingPeriodDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeExtension")
    public PrepaidBasePlanTypeTimeExtensionEnum timeExtension;
    public PrepaidBasePlanType withTimeExtension(PrepaidBasePlanTypeTimeExtensionEnum timeExtension) {
        this.timeExtension = timeExtension;
        return this;
    }
}