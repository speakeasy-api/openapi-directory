package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetShipmentByExternalIdResponseBodyWeight
 * The weight of a package
**/
public class GetShipmentByExternalIdResponseBodyWeight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public GetShipmentByExternalIdResponseBodyWeight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public GetShipmentByExternalIdResponseBodyWeight withValue(Double value) {
        this.value = value;
        return this;
    }
}