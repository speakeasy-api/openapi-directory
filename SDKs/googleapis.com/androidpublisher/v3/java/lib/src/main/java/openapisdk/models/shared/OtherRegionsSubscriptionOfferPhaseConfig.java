package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OtherRegionsSubscriptionOfferPhaseConfig
 * Configuration for any new locations Play may launch in for a single offer phase.
**/
public class OtherRegionsSubscriptionOfferPhaseConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absoluteDiscounts")
    public OtherRegionsSubscriptionOfferPhasePrices absoluteDiscounts;
    public OtherRegionsSubscriptionOfferPhaseConfig withAbsoluteDiscounts(OtherRegionsSubscriptionOfferPhasePrices absoluteDiscounts) {
        this.absoluteDiscounts = absoluteDiscounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherRegionsPrices")
    public OtherRegionsSubscriptionOfferPhasePrices otherRegionsPrices;
    public OtherRegionsSubscriptionOfferPhaseConfig withOtherRegionsPrices(OtherRegionsSubscriptionOfferPhasePrices otherRegionsPrices) {
        this.otherRegionsPrices = otherRegionsPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeDiscount")
    public Double relativeDiscount;
    public OtherRegionsSubscriptionOfferPhaseConfig withRelativeDiscount(Double relativeDiscount) {
        this.relativeDiscount = relativeDiscount;
        return this;
    }
}