package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderinvoicesCreateChargeInvoiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceId")
    public String invoiceId;
    public OrderinvoicesCreateChargeInvoiceRequest withInvoiceId(String invoiceId) {
        this.invoiceId = invoiceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSummary")
    public InvoiceSummary invoiceSummary;
    public OrderinvoicesCreateChargeInvoiceRequest withInvoiceSummary(InvoiceSummary invoiceSummary) {
        this.invoiceSummary = invoiceSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemInvoices")
    public ShipmentInvoiceLineItemInvoice[] lineItemInvoices;
    public OrderinvoicesCreateChargeInvoiceRequest withLineItemInvoices(ShipmentInvoiceLineItemInvoice[] lineItemInvoices) {
        this.lineItemInvoices = lineItemInvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrderinvoicesCreateChargeInvoiceRequest withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentGroupId")
    public String shipmentGroupId;
    public OrderinvoicesCreateChargeInvoiceRequest withShipmentGroupId(String shipmentGroupId) {
        this.shipmentGroupId = shipmentGroupId;
        return this;
    }
}