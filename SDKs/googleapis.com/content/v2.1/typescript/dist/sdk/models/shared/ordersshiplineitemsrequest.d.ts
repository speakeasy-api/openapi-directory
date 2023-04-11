import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo } from "./orderscustombatchrequestentryshiplineitemsshipmentinfo";
import { OrderShipmentLineItemShipment } from "./ordershipmentlineitemshipment";
export declare class OrdersShipLineItemsRequest extends SpeakeasyBase {
    /**
     * Line items to ship.
     */
    lineItems?: OrderShipmentLineItemShipment[];
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * ID of the shipment group. Required for orders that use the orderinvoices service.
     */
    shipmentGroupId?: string;
    /**
     * Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
     */
    shipmentInfos?: OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[];
}
