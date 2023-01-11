package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntryRejectReturnLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public OrdersCustomBatchRequestEntryRejectReturnLineItem withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public OrdersCustomBatchRequestEntryRejectReturnLineItem withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public OrdersCustomBatchRequestEntryRejectReturnLineItem withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrdersCustomBatchRequestEntryRejectReturnLineItem withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonText")
    public String reasonText;
    public OrdersCustomBatchRequestEntryRejectReturnLineItem withReasonText(String reasonText) {
        this.reasonText = reasonText;
        return this;
    }
}