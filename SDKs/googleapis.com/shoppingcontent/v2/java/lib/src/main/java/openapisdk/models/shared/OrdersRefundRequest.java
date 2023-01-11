package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersRefundRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Price amount;
    public OrdersRefundRequest withAmount(Price amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPretax")
    public Price amountPretax;
    public OrdersRefundRequest withAmountPretax(Price amountPretax) {
        this.amountPretax = amountPretax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountTax")
    public Price amountTax;
    public OrdersRefundRequest withAmountTax(Price amountTax) {
        this.amountTax = amountTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrdersRefundRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrdersRefundRequest withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonText")
    public String reasonText;
    public OrdersRefundRequest withReasonText(String reasonText) {
        this.reasonText = reasonText;
        return this;
    }
}