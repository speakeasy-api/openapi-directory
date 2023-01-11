import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryDeviceInfo } from "./googlechromemanagementv1telemetrydeviceinfo";
import { GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent } from "./googlechromemanagementv1telemetryhttpslatencychangeevent";
import { GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent } from "./googlechromemanagementv1telemetrynetworkconnectionstatechangeevent";
import { GoogleChromeManagementV1TelemetryUserInfo } from "./googlechromemanagementv1telemetryuserinfo";
export declare enum GoogleChromeManagementV1TelemetryEventEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    AudioSevereUnderrun = "AUDIO_SEVERE_UNDERRUN",
    NetworkConnectionStateChange = "NETWORK_CONNECTION_STATE_CHANGE",
    UsbAdded = "USB_ADDED",
    UsbRemoved = "USB_REMOVED",
    NetworkHttpsLatencyChange = "NETWORK_HTTPS_LATENCY_CHANGE"
}
/**
 * Telemetry data reported by a managed device.
**/
export declare class GoogleChromeManagementV1TelemetryEvent extends SpeakeasyBase {
    audioSevereUnderrunEvent?: Record<string, any>;
    device?: GoogleChromeManagementV1TelemetryDeviceInfo;
    eventType?: GoogleChromeManagementV1TelemetryEventEventTypeEnum;
    httpsLatencyChangeEvent?: GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent;
    name?: string;
    networkConnectionStateChangeEvent?: GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEvent;
    reportTime?: string;
    user?: GoogleChromeManagementV1TelemetryUserInfo;
}
