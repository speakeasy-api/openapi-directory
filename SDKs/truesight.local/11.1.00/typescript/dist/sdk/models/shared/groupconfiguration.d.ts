import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The deserialized form of the <b>Energy Footprint Update</b> service's request payload.
 */
export declare class GroupConfiguration extends SpeakeasyBase {
    /**
     * Updates the CO<sub>2</sub> emission (unit: kg/kWh).
     */
    co2Emission?: number;
    /**
     * Updates the electricity rate (unit: $/kWh).
     */
    energyCost?: number;
    /**
     * Updates the regular expression used to filter the groups for which the power consumption should be reported.
     */
    groupNameFilter?: string;
}
