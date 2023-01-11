package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OtherRegionsBasePlanConfig
 * Pricing information for any new locations Play may launch in.
**/
public class OtherRegionsBasePlanConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eurPrice")
    public Money eurPrice;
    public OtherRegionsBasePlanConfig withEurPrice(Money eurPrice) {
        this.eurPrice = eurPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSubscriberAvailability")
    public Boolean newSubscriberAvailability;
    public OtherRegionsBasePlanConfig withNewSubscriberAvailability(Boolean newSubscriberAvailability) {
        this.newSubscriberAvailability = newSubscriberAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usdPrice")
    public Money usdPrice;
    public OtherRegionsBasePlanConfig withUsdPrice(Money usdPrice) {
        this.usdPrice = usdPrice;
        return this;
    }
}