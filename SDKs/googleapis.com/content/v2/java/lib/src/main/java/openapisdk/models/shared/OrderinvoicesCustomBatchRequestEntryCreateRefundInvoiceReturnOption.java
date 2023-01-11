package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption withReason(String reason) {
        this.reason = reason;
        return this;
    }
}