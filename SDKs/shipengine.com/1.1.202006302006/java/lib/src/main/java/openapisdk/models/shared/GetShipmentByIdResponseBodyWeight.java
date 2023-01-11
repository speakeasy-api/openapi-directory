package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetShipmentByIdResponseBodyWeight
 * The weight of a package
**/
public class GetShipmentByIdResponseBodyWeight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public GetShipmentByIdResponseBodyWeight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public GetShipmentByIdResponseBodyWeight withValue(Double value) {
        this.value = value;
        return this;
    }
}