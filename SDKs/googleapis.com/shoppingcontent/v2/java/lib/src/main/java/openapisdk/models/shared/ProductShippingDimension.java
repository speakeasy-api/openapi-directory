package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductShippingDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public ProductShippingDimension withUnit(String unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Double value;
    public ProductShippingDimension withValue(Double value) {
        this.value = value;
        return this;
    }
}