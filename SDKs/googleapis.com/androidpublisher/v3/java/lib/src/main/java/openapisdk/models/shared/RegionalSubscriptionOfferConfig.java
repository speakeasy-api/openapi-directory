package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionalSubscriptionOfferConfig
 * Configuration for a subscription offer in a single region.
**/
public class RegionalSubscriptionOfferConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSubscriberAvailability")
    public Boolean newSubscriberAvailability;
    public RegionalSubscriptionOfferConfig withNewSubscriberAvailability(Boolean newSubscriberAvailability) {
        this.newSubscriberAvailability = newSubscriberAvailability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public RegionalSubscriptionOfferConfig withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
}