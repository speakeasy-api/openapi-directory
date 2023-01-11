package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemQuantities {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantityContext")
    public OrderLineItemQuantitiesQuantityContextEnum quantityContext;
    public OrderLineItemQuantities withQuantityContext(OrderLineItemQuantitiesQuantityContextEnum quantityContext) {
        this.quantityContext = quantityContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantityType")
    public OrderLineItemQuantitiesQuantityTypeEnum quantityType;
    public OrderLineItemQuantities withQuantityType(OrderLineItemQuantitiesQuantityTypeEnum quantityType) {
        this.quantityType = quantityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantityUOM")
    public OrderLineItemQuantitiesQuantityUomEnum quantityUOM;
    public OrderLineItemQuantities withQuantityUom(OrderLineItemQuantitiesQuantityUomEnum quantityUOM) {
        this.quantityUOM = quantityUOM;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantityValue")
    public Double quantityValue;
    public OrderLineItemQuantities withQuantityValue(Double quantityValue) {
        this.quantityValue = quantityValue;
        return this;
    }
}