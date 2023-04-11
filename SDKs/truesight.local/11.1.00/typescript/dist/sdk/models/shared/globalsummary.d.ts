import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful operation
 */
export declare class GlobalSummary extends SpeakeasyBase {
    /**
     * The CO<sub>2</sub> emissions for all devices. This value can be updated by users with sufficient permissions.
     */
    co2Emission?: number;
    /**
     * The unit in which the CO<sub>2</sub> emission is being expressed.
     */
    co2EmissionUnit?: string;
    /**
     * If <em>true</em>, indicates that you do not have sufficient rights to update the global settings. However, you may still have sufficient rights to update a specific group's setting.
     */
    editable?: boolean;
    /**
     * The electricity rate for all devices. This value can be updated by users with sufficient permissions.
     */
    energyCost?: number;
    /**
     * The unit in which the electricity rate is being expressed.
     */
    energyCostUnit?: string;
    /**
     * Regular expression used to filter the groups for which the power consumption will be reported.
     */
    groupNameFilter?: string;
    /**
     * The lowest heating margin among the heating margins of all the devices.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    heatingMargin?: number;
    /**
     * The percentage of devices whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    heatingMarginCoverage?: number;
    /**
     * The name of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    heatingMarginDeviceName?: string;
    /**
     * The link to the details of the device having the lowest heating margin.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    heatingMarginDeviceUrl?: string;
    /**
     * The unit in which the heating margin is being expressed.
     */
    heatingMarginUnit?: string;
    /**
     * The ID of the global summary (this ID will always be "global").
     */
    id?: string;
    /**
     * The total power consumption of all the devices.
     */
    totalPowerConsumption?: number;
    /**
     * The unit in which the total power consumption is being expressed.
     */
    totalPowerConsumptionUnit?: string;
    /**
     * The data collection time (as an Epoch time, in seconds).
     */
    updateTimestamp?: number;
}
