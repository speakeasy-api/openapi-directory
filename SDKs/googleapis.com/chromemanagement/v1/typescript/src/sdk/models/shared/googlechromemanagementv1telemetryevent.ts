import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryDeviceInfo } from "./googlechromemanagementv1telemetrydeviceinfo";
import { GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent } from "./googlechromemanagementv1telemetryhttpslatencychangeevent";
import { GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent } from "./googlechromemanagementv1telemetrynetworkconnectionstatechangeevent";
import { GoogleChromeManagementV1TelemetryUserInfo } from "./googlechromemanagementv1telemetryuserinfo";


export enum GoogleChromeManagementV1TelemetryEventEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    AudioSevereUnderrun = "AUDIO_SEVERE_UNDERRUN",
    NetworkConnectionStateChange = "NETWORK_CONNECTION_STATE_CHANGE",
    UsbAdded = "USB_ADDED",
    UsbRemoved = "USB_REMOVED",
    NetworkHttpsLatencyChange = "NETWORK_HTTPS_LATENCY_CHANGE"
}


// GoogleChromeManagementV1TelemetryEvent
/** 
 * Telemetry data reported by a managed device.
**/
export class GoogleChromeManagementV1TelemetryEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioSevereUnderrunEvent" })
  audioSevereUnderrunEvent?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: GoogleChromeManagementV1TelemetryDeviceInfo;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: GoogleChromeManagementV1TelemetryEventEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=httpsLatencyChangeEvent" })
  httpsLatencyChangeEvent?: GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkConnectionStateChangeEvent" })
  networkConnectionStateChangeEvent?: GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent;

  @SpeakeasyMetadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: GoogleChromeManagementV1TelemetryUserInfo;
}
