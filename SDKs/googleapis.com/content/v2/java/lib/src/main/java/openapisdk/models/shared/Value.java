package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Value
 * The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.
**/
public class Value {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrierRateName")
    public String carrierRateName;
    public Value withCarrierRateName(String carrierRateName) {
        this.carrierRateName = carrierRateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flatRate")
    public Price flatRate;
    public Value withFlatRate(Price flatRate) {
        this.flatRate = flatRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noShipping")
    public Boolean noShipping;
    public Value withNoShipping(Boolean noShipping) {
        this.noShipping = noShipping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricePercentage")
    public String pricePercentage;
    public Value withPricePercentage(String pricePercentage) {
        this.pricePercentage = pricePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtableName")
    public String subtableName;
    public Value withSubtableName(String subtableName) {
        this.subtableName = subtableName;
        return this;
    }
}