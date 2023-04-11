import { SpeakeasyBase } from "../../../internal/utils";
import { OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption } from "./orderinvoicescustombatchrequestentrycreaterefundinvoicerefundoption";
import { OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption } from "./orderinvoicescustombatchrequestentrycreaterefundinvoicereturnoption";
import { ShipmentInvoice } from "./shipmentinvoice";
export declare class OrderinvoicesCreateRefundInvoiceRequest extends SpeakeasyBase {
    /**
     * [required] The ID of the invoice.
     */
    invoiceId?: string;
    /**
     * [required] The ID of the operation, unique across all operations for a given order.
     */
    operationId?: string;
    refundOnlyOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption;
    returnOption?: OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption;
    /**
     * Invoice details for different shipment groups.
     */
    shipmentInvoices?: ShipmentInvoice[];
}
