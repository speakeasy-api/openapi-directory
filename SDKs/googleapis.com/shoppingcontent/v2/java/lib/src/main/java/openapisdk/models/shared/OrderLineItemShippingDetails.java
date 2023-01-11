package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderLineItemShippingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliverByDate")
    public String deliverByDate;
    public OrderLineItemShippingDetails withDeliverByDate(String deliverByDate) {
        this.deliverByDate = deliverByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public OrderLineItemShippingDetailsMethod method;
    public OrderLineItemShippingDetails withMethod(OrderLineItemShippingDetailsMethod method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipByDate")
    public String shipByDate;
    public OrderLineItemShippingDetails withShipByDate(String shipByDate) {
        this.shipByDate = shipByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public OrderLineItemShippingDetails withType(String type) {
        this.type = type;
        return this;
    }
}