import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data about an update to the status of a Chrome OS device.
 */
export declare class ChromeOsDeviceAction extends SpeakeasyBase {
    /**
     * Action to be taken on the Chrome OS device.
     */
    action?: string;
    /**
     * Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers.
     */
    deprovisionReason?: string;
}
