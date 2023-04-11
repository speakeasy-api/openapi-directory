import { SpeakeasyBase } from "../../../internal/utils";
import { UnitInvoice } from "./unitinvoice";
export declare class ShipmentInvoiceLineItemInvoice extends SpeakeasyBase {
    /**
     * ID of the line item. Either lineItemId or productId must be set.
     */
    lineItemId?: string;
    /**
     * ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set.
     */
    productId?: string;
    /**
     * [required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example: free or promotional units).
     */
    shipmentUnitIds?: string[];
    unitInvoice?: UnitInvoice;
}
