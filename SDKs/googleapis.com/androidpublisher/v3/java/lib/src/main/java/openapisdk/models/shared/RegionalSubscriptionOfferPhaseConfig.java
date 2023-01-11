package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegionalSubscriptionOfferPhaseConfig
 * Configuration for a single phase of a subscription offer in a single region.
**/
public class RegionalSubscriptionOfferPhaseConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absoluteDiscount")
    public Money absoluteDiscount;
    public RegionalSubscriptionOfferPhaseConfig withAbsoluteDiscount(Money absoluteDiscount) {
        this.absoluteDiscount = absoluteDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Money price;
    public RegionalSubscriptionOfferPhaseConfig withPrice(Money price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionCode")
    public String regionCode;
    public RegionalSubscriptionOfferPhaseConfig withRegionCode(String regionCode) {
        this.regionCode = regionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeDiscount")
    public Double relativeDiscount;
    public RegionalSubscriptionOfferPhaseConfig withRelativeDiscount(Double relativeDiscount) {
        this.relativeDiscount = relativeDiscount;
        return this;
    }
}