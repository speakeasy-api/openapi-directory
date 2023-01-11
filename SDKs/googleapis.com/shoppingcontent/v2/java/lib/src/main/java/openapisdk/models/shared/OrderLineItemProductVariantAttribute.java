package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemProductVariantAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public String dimension;
    public OrderLineItemProductVariantAttribute withDimension(String dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public OrderLineItemProductVariantAttribute withValue(String value) {
        this.value = value;
        return this;
    }
}