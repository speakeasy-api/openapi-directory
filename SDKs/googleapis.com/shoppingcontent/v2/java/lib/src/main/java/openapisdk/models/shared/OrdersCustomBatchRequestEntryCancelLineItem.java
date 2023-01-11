package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntryCancelLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Price amount;
    public OrdersCustomBatchRequestEntryCancelLineItem withAmount(Price amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPretax")
    public Price amountPretax;
    public OrdersCustomBatchRequestEntryCancelLineItem withAmountPretax(Price amountPretax) {
        this.amountPretax = amountPretax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountTax")
    public Price amountTax;
    public OrdersCustomBatchRequestEntryCancelLineItem withAmountTax(Price amountTax) {
        this.amountTax = amountTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrdersCustomBatchRequestEntryCancelLineItem withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OrdersCustomBatchRequestEntryCancelLineItem withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public OrdersCustomBatchRequestEntryCancelLineItem withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrdersCustomBatchRequestEntryCancelLineItem withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonText")
    public String reasonText;
    public OrdersCustomBatchRequestEntryCancelLineItem withReasonText(String reasonText) {
        this.reasonText = reasonText;
        return this;
    }
}