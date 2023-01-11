package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AdvancedShipmentOptionsWeight
 * The weight of a package
**/
public class AdvancedShipmentOptionsWeight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public AdvancedShipmentOptionsWeight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public AdvancedShipmentOptionsWeight withValue(Double value) {
        this.value = value;
        return this;
    }
}