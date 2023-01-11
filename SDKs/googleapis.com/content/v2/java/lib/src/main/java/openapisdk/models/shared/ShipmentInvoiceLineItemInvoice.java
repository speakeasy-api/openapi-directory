package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShipmentInvoiceLineItemInvoice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineItemId")
    public String lineItemId;
    public ShipmentInvoiceLineItemInvoice withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ShipmentInvoiceLineItemInvoice withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipmentUnitIds")
    public String[] shipmentUnitIds;
    public ShipmentInvoiceLineItemInvoice withShipmentUnitIds(String[] shipmentUnitIds) {
        this.shipmentUnitIds = shipmentUnitIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitInvoice")
    public UnitInvoice unitInvoice;
    public ShipmentInvoiceLineItemInvoice withUnitInvoice(UnitInvoice unitInvoice) {
        this.unitInvoice = unitInvoice;
        return this;
    }
}