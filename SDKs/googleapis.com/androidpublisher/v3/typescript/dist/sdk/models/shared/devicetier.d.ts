import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
 */
export declare class DeviceTier extends SpeakeasyBase {
    /**
     * Groups of devices included in this tier. These groups must be defined explicitly under device_groups in this configuration.
     */
    deviceGroupNames?: string[];
    /**
     * The priority level of the tier. Tiers are evaluated in descending order of level: the highest level tier has the highest priority. The highest tier matching a given device is selected for that device. You should use a contiguous range of levels for your tiers in a tier set; tier levels in a tier set must be unique. For instance, if your tier set has 4 tiers (including the global fallback), you should define tiers 1, 2 and 3 in this configuration. Note: tier 0 is implicitly defined as a global fallback and selected for devices that don't match any of the tiers explicitly defined here. You mustn't define level 0 explicitly in this configuration.
     */
    level?: number;
}
