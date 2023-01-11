package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TestOrderLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public TestOrderLineItemProduct product;
    public TestOrderLineItem withProduct(TestOrderLineItemProduct product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantityOrdered")
    public Long quantityOrdered;
    public TestOrderLineItem withQuantityOrdered(Long quantityOrdered) {
        this.quantityOrdered = quantityOrdered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnInfo")
    public OrderLineItemReturnInfo returnInfo;
    public TestOrderLineItem withReturnInfo(OrderLineItemReturnInfo returnInfo) {
        this.returnInfo = returnInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingDetails")
    public OrderLineItemShippingDetails shippingDetails;
    public TestOrderLineItem withShippingDetails(OrderLineItemShippingDetails shippingDetails) {
        this.shippingDetails = shippingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitTax")
    public Price unitTax;
    public TestOrderLineItem withUnitTax(Price unitTax) {
        this.unitTax = unitTax;
        return this;
    }
}