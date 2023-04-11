import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryEvent } from "./googlechromemanagementv1telemetryevent";
/**
 * Response message for listing telemetry events for a customer.
 */
export declare class GoogleChromeManagementV1ListTelemetryEventsResponse extends SpeakeasyBase {
    /**
     * Token to specify next page in the list.
     */
    nextPageToken?: string;
    /**
     * Telemetry events returned in the response.
     */
    telemetryEvents?: GoogleChromeManagementV1TelemetryEvent[];
}
