import { SpeakeasyBase } from "../../../internal/utils";
import { TrackEvent } from "./trackevent";
/**
 * A tracking information resource
**/
export declare class GetTrackingLogResponseBody extends SpeakeasyBase {
    actualDeliveryDate?: Date;
    carrierStatusCode: string;
    carrierStatusDescription?: string;
    estimatedDeliveryDate: Date;
    events: TrackEvent[];
    exceptionDescription?: string;
    shipDate?: Date;
    statusCode: string;
    statusDescription?: string;
    trackingNumber: string;
}
