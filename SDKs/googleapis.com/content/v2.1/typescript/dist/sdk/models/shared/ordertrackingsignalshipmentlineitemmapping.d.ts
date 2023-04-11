import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents how many items are in the shipment for the given shipment_id and line_item_id.
 */
export declare class OrderTrackingSignalShipmentLineItemMapping extends SpeakeasyBase {
    /**
     * Required. The line item ID.
     */
    lineItemId?: string;
    /**
     * The line item quantity in the shipment.
     */
    quantity?: string;
    /**
     * Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response.
     */
    shipmentId?: string;
}
