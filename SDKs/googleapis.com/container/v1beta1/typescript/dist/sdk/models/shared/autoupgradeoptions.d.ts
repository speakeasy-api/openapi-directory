import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
 */
export declare class AutoUpgradeOptions extends SpeakeasyBase {
    /**
     * [Output only] This field is set when upgrades are about to commence with the approximate start time for the upgrades, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    autoUpgradeStartTime?: string;
    /**
     * [Output only] This field is set when upgrades are about to commence with the description of the upgrade.
     */
    description?: string;
}
