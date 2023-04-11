import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo extends SpeakeasyBase {
    /**
     * The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
     */
    carrier?: string;
    /**
     * Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment.
     */
    shipmentId?: string;
    /**
     * The tracking ID for the shipment.
     */
    trackingId?: string;
}
