import { SpeakeasyBase } from "../../../internal/utils";
import { ReportStateAndNotificationDevice } from "./reportstateandnotificationdevice";
/**
 * Payload containing the state and notification information for devices.
 */
export declare class StateAndNotificationPayload extends SpeakeasyBase {
    /**
     * The states and notifications specific to a device.
     */
    devices?: ReportStateAndNotificationDevice;
}
