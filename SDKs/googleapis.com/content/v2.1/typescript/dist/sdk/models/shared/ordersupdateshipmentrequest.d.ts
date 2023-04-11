import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails } from "./orderscustombatchrequestentryupdateshipmentscheduleddeliverydetails";
export declare class OrdersUpdateShipmentRequest extends SpeakeasyBase {
    /**
     * The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.
     */
    carrier?: string;
    /**
     * Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`.
     */
    deliveryDate?: string;
    /**
     * Date after which the pickup will expire, in ISO 8601 format. Required only when order is buy-online-pickup-in-store(BOPIS) and `status` is `ready for pickup`.
     */
    lastPickupDate?: string;
    /**
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
    /**
     * Date on which the shipment has been ready for pickup, in ISO 8601 format. Optional and can be provided only if `status` is `ready for pickup`.
     */
    readyPickupDate?: string;
    /**
     * ScheduledDeliveryDetails used to update the scheduled delivery order.
     */
    scheduledDeliveryDetails?: OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails;
    /**
     * The ID of the shipment.
     */
    shipmentId?: string;
    /**
     * New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`"
     */
    status?: string;
    /**
     * The tracking ID for the shipment. Not updated if missing.
     */
    trackingId?: string;
    /**
     * Date on which the shipment has been undeliverable, in ISO 8601 format. Optional and can be provided only if `status` is `undeliverable`.
     */
    undeliveredDate?: string;
}
