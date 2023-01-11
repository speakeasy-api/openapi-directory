package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Rate
 * A SKU price consisting of tiered rates.
**/
public class Rate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tiers")
    public RateTier[] tiers;
    public Rate withTiers(RateTier[] tiers) {
        this.tiers = tiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public Rate withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitCount")
    public Double unitCount;
    public Rate withUnitCount(Double unitCount) {
        this.unitCount = unitCount;
        return this;
    }
}