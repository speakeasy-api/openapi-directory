import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The states and notifications specific to a device.
 */
export declare class ReportStateAndNotificationDevice extends SpeakeasyBase {
    /**
     * Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits).
     */
    notifications?: Record<string, any>;
    /**
     * States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.home.google.com/cloud-to-cloud/traits).
     */
    states?: Record<string, any>;
}
