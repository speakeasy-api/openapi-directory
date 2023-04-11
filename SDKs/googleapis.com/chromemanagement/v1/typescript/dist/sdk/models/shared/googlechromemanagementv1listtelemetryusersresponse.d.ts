import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryUser } from "./googlechromemanagementv1telemetryuser";
/**
 * Response message for listing telemetry users for a customer.
 */
export declare class GoogleChromeManagementV1ListTelemetryUsersResponse extends SpeakeasyBase {
    /**
     * Token to specify next page in the list.
     */
    nextPageToken?: string;
    /**
     * Telemetry users returned in the response.
     */
    telemetryUsers?: GoogleChromeManagementV1TelemetryUser[];
}
