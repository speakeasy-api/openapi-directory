package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionalBasePlanConfig
 * Configuration for a base plan specific to a region.
**/
public class RegionalBasePlanConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSubscriberAvailability")
    public Boolean newSubscriberAvailability;
    public RegionalBasePlanConfig withNewSubscriberAvailability(Boolean newSubscriberAvailability) {
        this.newSubscriberAvailability = newSubscriberAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public RegionalBasePlanConfig withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public RegionalBasePlanConfig withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}