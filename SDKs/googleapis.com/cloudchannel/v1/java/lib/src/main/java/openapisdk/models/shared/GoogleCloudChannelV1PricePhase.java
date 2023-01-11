package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1PricePhase
 * Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.
**/
public class GoogleCloudChannelV1PricePhase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstPeriod")
    public Integer firstPeriod;
    public GoogleCloudChannelV1PricePhase withFirstPeriod(Integer firstPeriod) {
        this.firstPeriod = firstPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastPeriod")
    public Integer lastPeriod;
    public GoogleCloudChannelV1PricePhase withLastPeriod(Integer lastPeriod) {
        this.lastPeriod = lastPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("periodType")
    public GoogleCloudChannelV1PricePhasePeriodTypeEnum periodType;
    public GoogleCloudChannelV1PricePhase withPeriodType(GoogleCloudChannelV1PricePhasePeriodTypeEnum periodType) {
        this.periodType = periodType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public GoogleCloudChannelV1Price price;
    public GoogleCloudChannelV1PricePhase withPrice(GoogleCloudChannelV1Price price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceTiers")
    public GoogleCloudChannelV1PriceTier[] priceTiers;
    public GoogleCloudChannelV1PricePhase withPriceTiers(GoogleCloudChannelV1PriceTier[] priceTiers) {
        this.priceTiers = priceTiers;
        return this;
    }
}