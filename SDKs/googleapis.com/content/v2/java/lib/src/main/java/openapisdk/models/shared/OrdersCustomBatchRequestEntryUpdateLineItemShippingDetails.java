package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliverByDate")
    public String deliverByDate;
    public OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails withDeliverByDate(String deliverByDate) {
        this.deliverByDate = deliverByDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipByDate")
    public String shipByDate;
    public OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails withShipByDate(String shipByDate) {
        this.shipByDate = shipByDate;
        return this;
    }
}