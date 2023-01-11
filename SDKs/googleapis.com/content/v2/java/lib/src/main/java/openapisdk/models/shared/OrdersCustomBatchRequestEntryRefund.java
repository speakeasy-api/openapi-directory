package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntryRefund {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Price amount;
    public OrdersCustomBatchRequestEntryRefund withAmount(Price amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountPretax")
    public Price amountPretax;
    public OrdersCustomBatchRequestEntryRefund withAmountPretax(Price amountPretax) {
        this.amountPretax = amountPretax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amountTax")
    public Price amountTax;
    public OrdersCustomBatchRequestEntryRefund withAmountTax(Price amountTax) {
        this.amountTax = amountTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrdersCustomBatchRequestEntryRefund withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonText")
    public String reasonText;
    public OrdersCustomBatchRequestEntryRefund withReasonText(String reasonText) {
        this.reasonText = reasonText;
        return this;
    }
}