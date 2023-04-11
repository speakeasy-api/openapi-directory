import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges extends SpeakeasyBase {
    /**
     * Day of when the outage ends. Can be either full day name, or three letter abbreviation
     */
    endDay: string;
    /**
     * 24 hour time when the outage ends.
     */
    endTime: string;
    /**
     * Day of when the outage starts. Can be either full day name, or three letter abbreviation.
     */
    startDay: string;
    /**
     * 24 hour time when the outage starts.
     */
    startTime: string;
}
export declare class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds extends SpeakeasyBase {
    /**
     * Seconds since Sunday at midnight when that outage range ends.
     */
    end: number;
    /**
     * Seconds since Sunday at midnight when the outage range starts.
     */
    start: number;
}
export declare class UpdateNetworkWirelessSsidSchedulesRequestBody extends SpeakeasyBase {
    /**
     * If true, the SSID outage schedule is enabled.
     */
    enabled?: boolean;
    /**
     * List of outage ranges. Has a start date and time, and end date and time. If this parameter is passed in along with rangesInSeconds parameter, this will take precedence.
     */
    ranges?: UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[];
    /**
     * List of outage ranges in seconds since Sunday at Midnight. Has a start and end. If this parameter is passed in along with the ranges parameter, ranges will take precedence.
     */
    rangesInSeconds?: UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[];
}
export declare class UpdateNetworkWirelessSsidSchedulesRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidSchedulesRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidSchedules200ApplicationJSONObject?: Record<string, any>;
}
