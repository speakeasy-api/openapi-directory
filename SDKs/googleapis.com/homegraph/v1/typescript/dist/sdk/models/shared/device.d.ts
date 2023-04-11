import { SpeakeasyBase } from "../../../internal/utils";
import { AgentOtherDeviceId } from "./agentotherdeviceid";
import { DeviceInfo } from "./deviceinfo";
import { DeviceNames } from "./devicenames";
/**
 * Third-party device definition.
 */
export declare class Device extends SpeakeasyBase {
    /**
     * Attributes for the traits supported by the device.
     */
    attributes?: Record<string, any>;
    /**
     * Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.home.google.com/cloud-to-cloud/intents/query) and [EXECUTE](https://developers.home.google.com/cloud-to-cloud/intents/execute) intent. Data in this object has a few constraints: No sensitive information, including but not limited to Personally Identifiable Information.
     */
    customData?: Record<string, any>;
    /**
     * Device information.
     */
    deviceInfo?: DeviceInfo;
    /**
     * Third-party device ID.
     */
    id?: string;
    /**
     * Identifiers used to describe the device.
     */
    name?: DeviceNames;
    /**
     * Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices.
     */
    notificationSupportedByAgent?: boolean;
    /**
     * Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.home.google.com/local-home/overview).
     */
    otherDeviceIds?: AgentOtherDeviceId[];
    /**
     * Suggested name for the room where this device is installed. Google attempts to use this value during user setup.
     */
    roomHint?: string;
    /**
     * Suggested name for the structure where this device is installed. Google attempts to use this value during user setup.
     */
    structureHint?: string;
    /**
     * Traits supported by the device. See [device traits](https://developers.home.google.com/cloud-to-cloud/traits).
     */
    traits?: string[];
    /**
     * Hardware type of the device. See [device types](https://developers.home.google.com/cloud-to-cloud/guides).
     */
    type?: string;
    /**
     * Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification.
     */
    willReportState?: boolean;
}
