import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1TelemetryDeviceInfo
/** 
 * Information about a device associated with telemetry data.
**/
export class GoogleChromeManagementV1TelemetryDeviceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;
}
