import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderShipmentScheduledDeliveryDetails extends SpeakeasyBase {
    /**
     * The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (e.g., "+41 44 668 1800").
     */
    carrierPhoneNumber?: string;
    /**
     * The date a shipment is scheduled for delivery, in ISO 8601 format.
     */
    scheduledDate?: string;
}
