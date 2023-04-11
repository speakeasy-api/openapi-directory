import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSelector } from "./deviceselector";
/**
 * A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
 */
export declare class DeviceGroup extends SpeakeasyBase {
    /**
     * Device selectors for this group. A device matching any of the selectors is included in this group.
     */
    deviceSelectors?: DeviceSelector[];
    /**
     * The name of the group.
     */
    name?: string;
}
