import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ScheduledDeliveryDetails used to update the scheduled delivery order.
 */
export declare class OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails extends SpeakeasyBase {
    /**
     * The phone number of the carrier fulfilling the delivery. The phone number should be formatted as the international notation in
     */
    carrierPhoneNumber?: string;
    /**
     * The date a shipment is scheduled for delivery, in ISO 8601 format.
     */
    scheduledDate?: string;
}
