package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListShipmentsResponseBodyPartialShipmentWeight
 * The weight of a package
**/
public class ListShipmentsResponseBodyPartialShipmentWeight {
    @JsonProperty("unit")
    public WeightUnitEnum unit;
    public ListShipmentsResponseBodyPartialShipmentWeight withUnit(WeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonProperty("value")
    public Double value;
    public ListShipmentsResponseBodyPartialShipmentWeight withValue(Double value) {
        this.value = value;
        return this;
    }
}