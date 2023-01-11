package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderinvoicesCreateRefundInvoiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public OrderinvoicesCreateRefundInvoiceRequest withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrderinvoicesCreateRefundInvoiceRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundOnlyOption")
    public OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption refundOnlyOption;
    public OrderinvoicesCreateRefundInvoiceRequest withRefundOnlyOption(OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption refundOnlyOption) {
        this.refundOnlyOption = refundOnlyOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnOption")
    public OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption returnOption;
    public OrderinvoicesCreateRefundInvoiceRequest withReturnOption(OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption returnOption) {
        this.returnOption = returnOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentInvoices")
    public ShipmentInvoice[] shipmentInvoices;
    public OrderinvoicesCreateRefundInvoiceRequest withShipmentInvoices(ShipmentInvoice[] shipmentInvoices) {
        this.shipmentInvoices = shipmentInvoices;
        return this;
    }
}