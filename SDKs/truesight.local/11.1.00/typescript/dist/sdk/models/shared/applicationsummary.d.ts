import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSummary } from "./devicesummary";
/**
 * Successful operation
 */
export declare class ApplicationSummary extends SpeakeasyBase {
    /**
     * The currency in which all energy cost values are being expressed.
     */
    costUnit?: string;
    /**
     * The list of devices attached to the application.<br><u>Note</u>: when using the <b>Applications</b> service, this list is always empty. It is populated only when using the <b>Application Details</b> service.
     */
    deviceSummaries?: DeviceSummary[];
    /**
     * The unit in which all CO<sub>2</sub> emission values are being expressed.
     */
    emittedCo2Unit?: string;
    /**
     * The unit in which all energy consumption values are being expressed.
     */
    energyConsumptionUnit?: string;
    /**
     * The lowest heating margin among the heating margins of the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be found.
     */
    heatingMargin?: number;
    /**
     * The percentage of devices attached to the application, whose heating margin could be found.<br><u>Note</u>:This field will only be present if a value could be found.
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
     * The unit in which the heating margin of the application is being expressed.
     */
    heatingMarginUnit?: string;
    /**
     * The name of the key used to identify the application in the history table.
     */
    historyParentIdKey?: string;
    /**
     * The ID of the application.
     */
    id?: string;
    /**
     * The name of the application.
     */
    name?: string;
    /**
     * The number of devices attached to the application.
     */
    numberOfDevices?: number;
    /**
     * The confidence score (percentage) for the daily energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.
     */
    oneDayConfidence?: number;
    /**
     * The daily cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneDayCost?: number;
    /**
     * The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one day.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneDayEmittedCo2?: number;
    /**
     * The quantity of energy consumed by the devices attached to the application during one day.
     */
    oneDayEnergyConsumption?: number;
    /**
     * The confidence score (percentage) for the monthly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.
     */
    oneMonthConfidence?: number;
    /**
     * The monthly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneMonthCost?: number;
    /**
     * The quantity of CO<sub>2</sub> emitted by the devices attached to the application during one month.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneMonthEmittedCo2?: number;
    /**
     * The quantity of energy consumed by the devices attached to the application during one month.
     */
    oneMonthEnergyConsumption?: number;
    /**
     * The confidence score (percentage) for the yearly energy consumption, energy cost and CO<sub>2</sub> emission values.<br>The lower the confidence score, the more extrapolated the values are.
     */
    oneYearConfidence?: number;
    /**
     * The yearly cost of the energy consumed by the devices attached to the application.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneYearCost?: number;
    /**
     * The quantity of CO<sub>2</sub> emitted by the devices attached to the application in one year.<br><u>Note</u>:This field will only be present if a value could be computed.
     */
    oneYearEmittedCo2?: number;
    /**
     * The quantity of energy consumed by the devices attached to the application during one year.
     */
    oneYearEnergyConsumption?: number;
    /**
     * The total power consumption of the devices attached to the application.
     */
    totalPowerConsumption?: number;
    /**
     * The unit in which the total power consumption of the devices attached to the application is being expressed.
     */
    totalPowerConsumptionUnit?: string;
    /**
     * The data collection time (as an Epoch time, in seconds).
     */
    updateTimestamp?: number;
    /**
     * The link to the application details.
     */
    url?: string;
}
