package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersReturnRefundLineItemRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPretax")
    public Price amountPretax;
    public OrdersReturnRefundLineItemRequest withAmountPretax(Price amountPretax) {
        this.amountPretax = amountPretax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountTax")
    public Price amountTax;
    public OrdersReturnRefundLineItemRequest withAmountTax(Price amountTax) {
        this.amountTax = amountTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrdersReturnRefundLineItemRequest withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrdersReturnRefundLineItemRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OrdersReturnRefundLineItemRequest withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public OrdersReturnRefundLineItemRequest withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrdersReturnRefundLineItemRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonText")
    public String reasonText;
    public OrdersReturnRefundLineItemRequest withReasonText(String reasonText) {
        this.reasonText = reasonText;
        return this;
    }
}