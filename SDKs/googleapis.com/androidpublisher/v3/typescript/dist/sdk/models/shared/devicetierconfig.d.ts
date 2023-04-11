import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceGroup } from "./devicegroup";
import { DeviceTierSet } from "./devicetierset";
import { UserCountrySet } from "./usercountryset";
/**
 * Configuration describing device targeting criteria for the content of an app.
 */
export declare class DeviceTierConfig extends SpeakeasyBase {
    /**
     * Definition of device groups for the app.
     */
    deviceGroups?: DeviceGroup[];
    /**
     * Output only. The device tier config ID.
     */
    deviceTierConfigId?: string;
    /**
     * A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.
     */
    deviceTierSet?: DeviceTierSet;
    /**
     * Definition of user country sets for the app.
     */
    userCountrySets?: UserCountrySet[];
}
/**
 * Configuration describing device targeting criteria for the content of an app.
 */
export declare class DeviceTierConfigInput extends SpeakeasyBase {
    /**
     * Definition of device groups for the app.
     */
    deviceGroups?: DeviceGroup[];
    /**
     * A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.
     */
    deviceTierSet?: DeviceTierSet;
    /**
     * Definition of user country sets for the app.
     */
    userCountrySets?: UserCountrySet[];
}
