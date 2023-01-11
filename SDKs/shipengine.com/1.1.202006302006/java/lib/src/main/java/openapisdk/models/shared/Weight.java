package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Weight
 * The weight of a package
**/
public class Weight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public Weight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public Weight withValue(Double value) {
        this.value = value;
        return this;
    }
}