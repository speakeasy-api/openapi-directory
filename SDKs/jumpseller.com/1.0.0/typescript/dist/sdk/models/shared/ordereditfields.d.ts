import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAdditionalFields } from "./orderadditionalfields";
/**
 * Status of the Order Shipping
 */
export declare enum OrderEditFieldsShipmentStatusEnum {
    Requested = "requested",
    InTransit = "in_transit",
    Delivered = "delivered",
    Failed = "failed",
    PickupAvailable = "pickup_available"
}
/**
 * Status of the Order
 */
export declare enum OrderEditFieldsStatusEnum {
    Abandoned = "Abandoned",
    Canceled = "Canceled",
    PendingPayment = "Pending Payment",
    Paid = "Paid"
}
export declare class OrderEditFields extends SpeakeasyBase {
    /**
     * Array of additional fields for the given Order
     */
    additionalFields?: OrderAdditionalFields[];
    /**
     * Additional information for the given Order
     */
    additionalInformation?: string;
    /**
     * Status of the Order Shipping
     */
    shipmentStatus?: OrderEditFieldsShipmentStatusEnum;
    /**
     * Status of the Order
     */
    status?: OrderEditFieldsStatusEnum;
    /**
     * Shipping Company used for the given Order
     */
    trackingCompany?: string;
    /**
     * Shipping Tracking Number used for the given Order
     */
    trackingNumber?: string;
    /**
     * URL to check delivery information for the given Order
     */
    trackingUrl?: string;
}
