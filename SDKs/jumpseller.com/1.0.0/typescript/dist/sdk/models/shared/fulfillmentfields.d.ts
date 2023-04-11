import { SpeakeasyBase } from "../../../internal/utils";
export declare class FulfillmentFields extends SpeakeasyBase {
    /**
     * Unique identifier of the Fulfillment used by the tracking company
     */
    externalId?: string;
    /**
     * Unique identifier of the Fulfillment
     */
    id?: number;
    /**
     * Order associated with the fulfillment
     */
    orderId?: string;
    /**
     * Type of Service requested to the tracking company
     */
    serviceType?: string;
    /**
     * Status of the fulfillment
     */
    shipmentStatus?: string;
    /**
     * Tracking company responsible for the fulfillment
     */
    trackingCompany?: string;
    /**
     * Tracking Number associated with the fulfillment
     */
    trackingNumber?: string;
    /**
     * Type of fulfillment Service used
     */
    type?: string;
}
