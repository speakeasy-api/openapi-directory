package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption withReason(String reason) {
        this.reason = reason;
        return this;
    }
}