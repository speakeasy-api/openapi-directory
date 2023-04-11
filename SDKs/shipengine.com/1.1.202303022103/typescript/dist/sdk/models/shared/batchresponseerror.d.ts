import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch response error
 */
export declare class BatchResponseError extends SpeakeasyBase {
    /**
     * Error message associated with the shipment.
     */
    error?: string;
    /**
     * An external shipment id associated with the shipment
     */
    externalShipmentId?: string;
    /**
     * A string that uniquely identifies the shipment
     */
    shipmentId?: string;
}
