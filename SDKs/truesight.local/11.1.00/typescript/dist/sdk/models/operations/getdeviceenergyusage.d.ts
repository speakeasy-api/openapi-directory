import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Subdivision of the period for which you wish to retrieve energy usage data.
 */
export declare enum GetDeviceEnergyUsageBasisEnum {
    Monthly = "MONTHLY",
    Daily = "DAILY",
    Hourly = "HOURLY"
}
/**
 * The period for which you wish to retrieve energy usage data.
 */
export declare enum GetDeviceEnergyUsageRollPeriodEnum {
    OneDay = "ONE_DAY",
    OneWeek = "ONE_WEEK",
    OneMonth = "ONE_MONTH",
    SixMonths = "SIX_MONTHS",
    OneYear = "ONE_YEAR"
}
export declare class GetDeviceEnergyUsageRequest extends SpeakeasyBase {
    /**
     * Subdivision of the period for which you wish to retrieve energy usage data.
     */
    basis?: GetDeviceEnergyUsageBasisEnum;
    /**
     * The ID of the device.
     */
    deviceId: number;
    /**
     * The period for which you wish to retrieve energy usage data.
     */
    rollPeriod?: GetDeviceEnergyUsageRollPeriodEnum;
}
export declare class GetDeviceEnergyUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
