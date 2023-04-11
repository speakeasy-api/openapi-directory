import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3PlayerReport } from "./googlemapsplayablelocationsv3playerreport";
import { GoogleMapsUnityClientInfo } from "./googlemapsunityclientinfo";
/**
 * A request for logging your player's bad location reports.
 */
export declare class GoogleMapsPlayablelocationsV3LogPlayerReportsRequest extends SpeakeasyBase {
    /**
     * Client information.
     */
    clientInfo?: GoogleMapsUnityClientInfo;
    /**
     * Required. Player reports. The maximum number of player reports that you can log at once is 50.
     */
    playerReports?: GoogleMapsPlayablelocationsV3PlayerReport[];
    /**
     * Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that failed.
     */
    requestId?: string;
}
