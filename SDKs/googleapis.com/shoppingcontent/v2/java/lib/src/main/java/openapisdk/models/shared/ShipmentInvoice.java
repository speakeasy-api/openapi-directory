package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShipmentInvoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSummary")
    public InvoiceSummary invoiceSummary;
    public ShipmentInvoice withInvoiceSummary(InvoiceSummary invoiceSummary) {
        this.invoiceSummary = invoiceSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemInvoices")
    public ShipmentInvoiceLineItemInvoice[] lineItemInvoices;
    public ShipmentInvoice withLineItemInvoices(ShipmentInvoiceLineItemInvoice[] lineItemInvoices) {
        this.lineItemInvoices = lineItemInvoices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentGroupId")
    public String shipmentGroupId;
    public ShipmentInvoice withShipmentGroupId(String shipmentGroupId) {
        this.shipmentGroupId = shipmentGroupId;
        return this;
    }
}