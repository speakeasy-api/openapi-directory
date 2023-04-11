import { SpeakeasyBase } from "../../../internal/utils";
import { StatusCodeEnum } from "./statuscodeenum";
import { TrackEvent } from "./trackevent";
/**
 * A tracking information resource
 */
export declare class GetTrackingLogResponseBody extends SpeakeasyBase {
    actualDeliveryDate?: Date;
    carrierCode: string;
    /**
     * Carrier detail code
     */
    carrierDetailCode: string;
    carrierId: string;
    /**
     * Carrier status code
     */
    carrierStatusCode: string;
    /**
     * carrier status description
     */
    carrierStatusDescription?: string;
    estimatedDeliveryDate: Date;
    /**
     * The events that have occured during the lifetime of this tracking number.
     */
    events: TrackEvent[];
    /**
     * Exception description
     */
    exceptionDescription?: string;
    shipDate?: Date;
    statusCode: StatusCodeEnum;
    /**
     * Status description
     */
    statusDescription?: string;
    trackingNumber: string;
    /**
     * Carrier Tracking Url, if available
     */
    trackingUrl: string;
}
