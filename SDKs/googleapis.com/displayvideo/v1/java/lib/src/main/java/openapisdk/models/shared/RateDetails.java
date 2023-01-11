package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateDetails
 * The rate related settings of the inventory source.
**/
public class RateDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventorySourceRateType")
    public RateDetailsInventorySourceRateTypeEnum inventorySourceRateType;
    public RateDetails withInventorySourceRateType(RateDetailsInventorySourceRateTypeEnum inventorySourceRateType) {
        this.inventorySourceRateType = inventorySourceRateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumSpend")
    public Money minimumSpend;
    public RateDetails withMinimumSpend(Money minimumSpend) {
        this.minimumSpend = minimumSpend;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate")
    public Money rate;
    public RateDetails withRate(Money rate) {
        this.rate = rate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitsPurchased")
    public String unitsPurchased;
    public RateDetails withUnitsPurchased(String unitsPurchased) {
        this.unitsPurchased = unitsPurchased;
        return this;
    }
}