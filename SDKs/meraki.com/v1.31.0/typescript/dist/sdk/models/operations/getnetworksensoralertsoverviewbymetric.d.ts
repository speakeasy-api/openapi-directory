import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSensorAlertsOverviewByMetricRequest extends SpeakeasyBase {
    /**
     * The time interval in seconds for returned data. The valid intervals are: 86400, 604800. The default is 604800.
     */
    interval?: number;
    networkId: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
     */
    timespan?: number;
}
/**
 * Object containing the number of sensor alerts that occurred due to noise readings
 */
export declare class GetNetworkSensorAlertsOverviewByMetric200ApplicationJSONCountsNoise extends SpeakeasyBase {
    /**
     * Number of sensor alerts that occurred due to ambient noise readings
     */
    ambient?: number;
}
/**
 * Counts of sensor alerts over the timespan, by reading metric
 */
export declare class GetNetworkSensorAlertsOverviewByMetric200ApplicationJSONCounts extends SpeakeasyBase {
    /**
     * Number of sensor alerts that occurred due to an open door
     */
    door?: number;
    /**
     * Number of sensor alerts that occurred due to humidity readings
     */
    humidity?: number;
    /**
     * Number of sensor alerts that occurred due to indoor air quality readings
     */
    indoorAirQuality?: number;
    /**
     * Object containing the number of sensor alerts that occurred due to noise readings
     */
    noise?: GetNetworkSensorAlertsOverviewByMetric200ApplicationJSONCountsNoise;
    /**
     * Number of sensor alerts that occurred due to PM2.5 readings
     */
    pm25?: number;
    /**
     * Number of sensor alerts that occurred due to temperature readings
     */
    temperature?: number;
    /**
     * Number of sensor alerts that occurred due to TVOC readings
     */
    tvoc?: number;
    /**
     * Number of sensor alerts that occurred due to the presence of water
     */
    water?: number;
}
export declare class GetNetworkSensorAlertsOverviewByMetric200ApplicationJSON extends SpeakeasyBase {
    /**
     * Counts of sensor alerts over the timespan, by reading metric
     */
    counts?: GetNetworkSensorAlertsOverviewByMetric200ApplicationJSONCounts;
    /**
     * End of the timespan over which sensor alerts are counted
     */
    endTs?: Date;
    /**
     * Start of the timespan over which sensor alerts are counted
     */
    startTs?: Date;
}
export declare class GetNetworkSensorAlertsOverviewByMetricResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSensorAlertsOverviewByMetric200ApplicationJSONObjects?: GetNetworkSensorAlertsOverviewByMetric200ApplicationJSON[];
}
