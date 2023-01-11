import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1TelemetryUserInfo
/** 
 * Information about a user associated with telemetry data.
**/
export class GoogleChromeManagementV1TelemetryUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;
}
