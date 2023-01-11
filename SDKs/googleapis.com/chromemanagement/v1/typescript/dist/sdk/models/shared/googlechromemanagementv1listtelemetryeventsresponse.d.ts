import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryEvent } from "./googlechromemanagementv1telemetryevent";
/**
 * Response message for listing telemetry events for a customer.
**/
export declare class GoogleChromeManagementV1ListTelemetryEventsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    telemetryEvents?: GoogleChromeManagementV1TelemetryEvent[];
}
