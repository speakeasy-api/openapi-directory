import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo } from "./orderscustombatchrequestentryshiplineitemsshipmentinfo";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
export declare class OrdersCustomBatchRequestEntryShipLineItems extends SpeakeasyBase {
    /**
     * Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
     */
    carrier?: string;
    /**
     * Line items to ship.
     */
    lineItems?: OrderShipmentLineItemShipment[];
    /**
     * ID of the shipment group. Required for orders that use the orderinvoices service.
     */
    shipmentGroupId?: string;
    /**
     * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
     */
    shipmentId?: string;
    /**
     * Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
     */
    shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
    /**
     * Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.
     */
    trackingId?: string;
}
