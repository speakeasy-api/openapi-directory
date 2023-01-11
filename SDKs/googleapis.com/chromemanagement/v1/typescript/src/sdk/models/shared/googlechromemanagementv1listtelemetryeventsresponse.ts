import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryEvent } from "./googlechromemanagementv1telemetryevent";



// GoogleChromeManagementV1ListTelemetryEventsResponse
/** 
 * Response message for listing telemetry events for a customer.
**/
export class GoogleChromeManagementV1ListTelemetryEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=telemetryEvents", elemType: GoogleChromeManagementV1TelemetryEvent })
  telemetryEvents?: GoogleChromeManagementV1TelemetryEvent[];
}
