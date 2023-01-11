import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A shipment response error.
**/
export declare class ShipmentResponseError extends SpeakeasyBase {
    error: string;
    externalShipmentId?: Record<string, any>;
    shipmentId: Record<string, any>;
}
