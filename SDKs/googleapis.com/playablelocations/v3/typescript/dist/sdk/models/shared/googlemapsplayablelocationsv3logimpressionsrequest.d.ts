import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3Impression } from "./googlemapsplayablelocationsv3impression";
import { GoogleMapsUnityClientInfo } from "./googlemapsunityclientinfo";
/**
 * A request for logging impressions.
 */
export declare class GoogleMapsPlayablelocationsV3LogImpressionsRequest extends SpeakeasyBase {
    /**
     * Client information.
     */
    clientInfo?: GoogleMapsUnityClientInfo;
    /**
     * Required. Impression event details. The maximum number of impression reports that you can log at once is 50.
     */
    impressions?: GoogleMapsPlayablelocationsV3Impression[];
    /**
     * Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in case of failure. In this case, the request must be identical to the one that failed.
     */
    requestId?: string;
}
