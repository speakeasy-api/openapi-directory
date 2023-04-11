import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSummary } from "./devicesummary";
/**
 * Successful operation
 */
export declare class GroupSummary extends SpeakeasyBase {
    /**
     * The average ambient temperature based on the ambient temperatures of the devices attached to the group.
     */
    ambientTemperature?: number;
    /**
     * The unit in which the ambient temperature value is being expressed.
     */
    ambientTemperatureUnit?: string;
    /**
     * The CO<sub>2</sub> emissions for all devices attached to the group. This value can be updated by users with sufficient permissions.
     */
    co2Emission?: number;
    /**
     * The unit in which the user-defined CO<sub>2</sub> emission value is being expressed.
     */
    co2EmissionUnit?: string;
    /**
     * The currency in which all energy cost values are being expressed.
     */
    costUnit?: string;
    deviceSummaries?: DeviceSummary[];
    /**
     * The name of the key used to identify the group in the history table.
     */
    editable?: boolean;
    /**
     * The unit in which all emitted CO<sub>2</sub> quantities are being expressed.
     */
    emittedCo2Unit?: string;
    /**
     * The unit in which all energy consumption values are being expressed.
     */
    energyConsumptionUnit?: string;
    /**
     * The electricity rate for all devices attached to the group. This value can be updated by users with sufficient permissions.
     */
    energyCost?: number;
    /**
     * The unit in which th euser-defined electricity rate value is being expressed.
     */
    energyCostUnit?: string;
    /**
     * The lowest heating margin among the heating margins of the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    heatingMargin?: number;
    /**
     * The percentage of devices attached to the group, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.
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
     * The unit in which the heating margin of the group is being expressed.
     */
    heatingMarginUnit?: string;
    historyParentIdKey?: string;
    /**
     * The ID of the group.
     */
    id?: string;
    /**
     * The name of the group.
     */
    name?: string;
    /**
     * The number of devices attached to the group.
     */
    numberOfDevices?: number;
    /**
     * The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.
     */
    oneDayConfidence?: number;
    /**
     * The daily cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneDayCost?: number;
    /**
     * The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one day.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneDayEmittedCo2?: number;
    /**
     * The quantity of energy consumed by the devices attached to the group during one day.
     */
    oneDayEnergyConsumption?: number;
    /**
     * The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.
     */
    oneMonthConfidence?: number;
    /**
     * The monthly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneMonthCost?: number;
    /**
     * The quantity of CO<sub>2</sub> emitted by the devices attached to the group during one month.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneMonthEmittedCo2?: number;
    /**
     * The quantity of energy consumed by the devices attached to the group during one month.
     */
    oneMonthEnergyConsumption?: number;
    /**
     * The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.
     */
    oneYearConfidence?: number;
    /**
     * The yearly cost of the energy consumed by the devices attached to the group.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneYearCost?: number;
    /**
     * The quantity of CO<sub>2</sub> emitted by the devices attached to the group in one year.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneYearEmittedCo2?: number;
    /**
     * The quantity of energy consumed by the devices attached to the group during one year.
     */
    oneYearEnergyConsumption?: number;
    /**
     * The ID of the server the group is attached to.
     */
    serverId?: number;
    /**
     * The total power consumption of the devices attached to the group.
     */
    totalPowerConsumption?: number;
    /**
     * The unit in which the total power consumption of the devices attached to the group is being expressed.
     */
    totalPowerConsumptionUnit?: string;
    /**
     * The data collection time (as an Epoch time, in seconds).
     */
    updateTimestamp?: number;
    /**
     * The link to the group details.
     */
    url?: string;
}
