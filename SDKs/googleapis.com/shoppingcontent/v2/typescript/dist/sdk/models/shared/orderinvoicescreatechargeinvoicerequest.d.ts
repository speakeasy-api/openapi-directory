import { SpeakeasyBase } from "../../../internal/utils";
import { InvoiceSummary } from "./invoicesummary";
import { ShipmentInvoiceLineItemInvoice } from "./shipmentinvoicelineiteminvoice";
export declare class OrderinvoicesCreateChargeInvoiceRequest extends SpeakeasyBase {
    /**
     * [required] The ID of the invoice.
     */
    invoiceId?: string;
    invoiceSummary?: InvoiceSummary;
    /**
     * [required] Invoice details per line item.
     */
    lineItemInvoices?: ShipmentInvoiceLineItemInvoice[];
    /**
     * [required] The ID of the operation, unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * [required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges.
     */
    shipmentGroupId?: string;
}
