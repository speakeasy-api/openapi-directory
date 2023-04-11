import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromeManagementV1TelemetryDeviceInfo } from "./googlechromemanagementv1telemetrydeviceinfo";
import { GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent } from "./googlechromemanagementv1telemetryhttpslatencychangeevent";
import { GoogleChromeManagementV1TelemetryUsbPeripheralsEvent } from "./googlechromemanagementv1telemetryusbperipheralsevent";
import { GoogleChromeManagementV1TelemetryUserInfo } from "./googlechromemanagementv1telemetryuserinfo";
/**
 * The event type of the current event.
 */
export declare enum GoogleChromeManagementV1TelemetryEventEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    AudioSevereUnderrun = "AUDIO_SEVERE_UNDERRUN",
    UsbAdded = "USB_ADDED",
    UsbRemoved = "USB_REMOVED",
    NetworkHttpsLatencyChange = "NETWORK_HTTPS_LATENCY_CHANGE"
}
/**
 * Telemetry data reported by a managed device.
 */
export declare class GoogleChromeManagementV1TelemetryEvent extends SpeakeasyBase {
    /**
     * `TelemetryAudioSevereUnderrunEvent` is triggered when a audio devices run out of buffer data for more than 5 seconds.
     */
    audioSevereUnderrunEvent?: Record<string, any>;
    /**
     * Information about a device associated with telemetry data.
     */
    device?: GoogleChromeManagementV1TelemetryDeviceInfo;
    /**
     * The event type of the current event.
     */
    eventType?: GoogleChromeManagementV1TelemetryEventEventTypeEnum;
    /**
     * Https latency routine is run periodically and `TelemetryHttpsLatencyChangeEvent` is triggered if a latency problem was detected or if the device has recovered from a latency problem..
     */
    httpsLatencyChangeEvent?: GoogleChromeManagementV1TelemetryHttpsLatencyChangeEvent;
    /**
     * Output only. Resource name of the event.
     */
    name?: string;
    /**
     * Timestamp that represents when the event was reported.
     */
    reportTime?: string;
    /**
     * `TelemetryUsbPeripheralsEvent` is triggered USB devices are either added or removed.
     */
    usbPeripheralsEvent?: GoogleChromeManagementV1TelemetryUsbPeripheralsEvent;
    /**
     * Information about a user associated with telemetry data.
     */
    user?: GoogleChromeManagementV1TelemetryUserInfo;
}
