package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OtherRegionsSubscriptionOfferConfig
 * Configuration for any new locations Play may launch in specified on a subscription offer.
**/
public class OtherRegionsSubscriptionOfferConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherRegionsNewSubscriberAvailability")
    public Boolean otherRegionsNewSubscriberAvailability;
    public OtherRegionsSubscriptionOfferConfig withOtherRegionsNewSubscriberAvailability(Boolean otherRegionsNewSubscriberAvailability) {
        this.otherRegionsNewSubscriberAvailability = otherRegionsNewSubscriberAvailability;
        return this;
    }
}