package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntryInStoreRefundLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPretax")
    public Price amountPretax;
    public OrdersCustomBatchRequestEntryInStoreRefundLineItem withAmountPretax(Price amountPretax) {
        this.amountPretax = amountPretax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountTax")
    public Price amountTax;
    public OrdersCustomBatchRequestEntryInStoreRefundLineItem withAmountTax(Price amountTax) {
        this.amountTax = amountTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrdersCustomBatchRequestEntryInStoreRefundLineItem withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OrdersCustomBatchRequestEntryInStoreRefundLineItem withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public OrdersCustomBatchRequestEntryInStoreRefundLineItem withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrdersCustomBatchRequestEntryInStoreRefundLineItem withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonText")
    public String reasonText;
    public OrdersCustomBatchRequestEntryInStoreRefundLineItem withReasonText(String reasonText) {
        this.reasonText = reasonText;
        return this;
    }
}