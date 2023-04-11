import { SpeakeasyBase } from "../../../internal/utils";
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
     * The ID of the operation. Unique across all operations for a given order.
     */
    operationId?: string;
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
}
