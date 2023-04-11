import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceId } from "./deviceid";
import { DeviceRam } from "./deviceram";
import { SystemFeature } from "./systemfeature";
/**
 * Selector for a device group. A selector consists of a set of conditions on the device that should all match (logical AND) to determine a device group eligibility. For instance, if a selector specifies RAM conditions, device model inclusion and device model exclusion, a device is considered to match if: device matches RAM conditions AND device matches one of the included device models AND device doesn't match excluded device models
 */
export declare class DeviceSelector extends SpeakeasyBase {
    /**
     * Conditions about a device's RAM capabilities.
     */
    deviceRam?: DeviceRam;
    /**
     * Device models excluded by this selector, even if they match all other conditions.
     */
    excludedDeviceIds?: DeviceId[];
    /**
     * A device that has any of these system features is excluded by this selector, even if it matches all other conditions.
     */
    forbiddenSystemFeatures?: SystemFeature[];
    /**
     * Device models included by this selector.
     */
    includedDeviceIds?: DeviceId[];
    /**
     * A device needs to have all these system features to be included by the selector.
     */
    requiredSystemFeatures?: SystemFeature[];
}
