package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CalculateRatesResponseBodyWeight
 * The weight of a package
**/
public class CalculateRatesResponseBodyWeight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public CalculateRatesResponseBodyWeight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public CalculateRatesResponseBodyWeight withValue(Double value) {
        this.value = value;
        return this;
    }
}