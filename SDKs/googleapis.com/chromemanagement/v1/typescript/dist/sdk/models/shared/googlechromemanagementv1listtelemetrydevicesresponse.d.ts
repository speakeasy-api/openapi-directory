import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryDevice } from "./googlechromemanagementv1telemetrydevice";
/**
 * Successful response
 */
export declare class GoogleChromeManagementV1ListTelemetryDevicesResponse extends SpeakeasyBase {
    /**
     * Telemetry devices returned in the response.
     */
    devices?: GoogleChromeManagementV1TelemetryDevice[];
    /**
     * Token to specify next page in the list.
     */
    nextPageToken?: string;
}
