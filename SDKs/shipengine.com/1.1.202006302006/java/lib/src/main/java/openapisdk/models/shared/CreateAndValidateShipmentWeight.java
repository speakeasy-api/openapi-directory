package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateAndValidateShipmentWeight
 * The weight of a package
**/
public class CreateAndValidateShipmentWeight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public CreateAndValidateShipmentWeight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public CreateAndValidateShipmentWeight withValue(Double value) {
        this.value = value;
        return this;
    }
}