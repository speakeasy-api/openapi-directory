package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateShipmentResponseBodyWeight
 * The weight of a package
**/
public class UpdateShipmentResponseBodyWeight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public UpdateShipmentResponseBodyWeight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public UpdateShipmentResponseBodyWeight withValue(Double value) {
        this.value = value;
        return this;
    }
}