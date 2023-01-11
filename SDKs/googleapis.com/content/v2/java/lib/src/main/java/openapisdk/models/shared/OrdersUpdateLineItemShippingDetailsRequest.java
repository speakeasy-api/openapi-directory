package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersUpdateLineItemShippingDetailsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliverByDate")
    public String deliverByDate;
    public OrdersUpdateLineItemShippingDetailsRequest withDeliverByDate(String deliverByDate) {
        this.deliverByDate = deliverByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrdersUpdateLineItemShippingDetailsRequest withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrdersUpdateLineItemShippingDetailsRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OrdersUpdateLineItemShippingDetailsRequest withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipByDate")
    public String shipByDate;
    public OrdersUpdateLineItemShippingDetailsRequest withShipByDate(String shipByDate) {
        this.shipByDate = shipByDate;
        return this;
    }
}