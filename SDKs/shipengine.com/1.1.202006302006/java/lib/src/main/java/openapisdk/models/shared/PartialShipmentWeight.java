package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PartialShipmentWeight
 * The weight of a package
**/
public class PartialShipmentWeight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public PartialShipmentWeight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public PartialShipmentWeight withValue(Double value) {
        this.value = value;
        return this;
    }
}