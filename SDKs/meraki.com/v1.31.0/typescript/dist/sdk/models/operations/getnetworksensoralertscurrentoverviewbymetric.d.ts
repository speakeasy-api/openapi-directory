import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSensorAlertsCurrentOverviewByMetricRequest extends SpeakeasyBase {
    networkId: string;
}
/**
 * Object containing the number of sensors that are currently alerting due to noise readings
 */
export declare class GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONCountsNoise extends SpeakeasyBase {
    /**
     * Number of sensors that are currently alerting due to ambient noise readings
     */
    ambient?: number;
}
/**
 * Counts of currently alerting sensors, aggregated by alerting metric
 */
export declare class GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONCounts extends SpeakeasyBase {
    /**
     * Number of sensors that are currently alerting due to an open door
     */
    door?: number;
    /**
     * Number of sensors that are currently alerting due to humidity readings
     */
    humidity?: number;
    /**
     * Number of sensors that are currently alerting due to indoor air quality readings
     */
    indoorAirQuality?: number;
    /**
     * Object containing the number of sensors that are currently alerting due to noise readings
     */
    noise?: GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONCountsNoise;
    /**
     * Number of sensors that are currently alerting due to PM2.5 readings
     */
    pm25?: number;
    /**
     * Number of sensors that are currently alerting due to temperature readings
     */
    temperature?: number;
    /**
     * Number of sensors that are currently alerting due to TVOC readings
     */
    tvoc?: number;
    /**
     * Number of sensors that are currently alerting due to the presence of water
     */
    water?: number;
}
export declare enum GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONSupportedMetricsEnum {
    Door = "door",
    Humidity = "humidity",
    IndoorAirQuality = "indoorAirQuality",
    Noise = "noise",
    Pm25 = "pm25",
    Temperature = "temperature",
    Tvoc = "tvoc",
    Water = "water"
}
/**
 * Successful operation
 */
export declare class GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSON extends SpeakeasyBase {
    /**
     * Counts of currently alerting sensors, aggregated by alerting metric
     */
    counts?: GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONCounts;
    /**
     * List of metrics that are supported for alerts, based on available sensor devices in the network
     */
    supportedMetrics?: GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONSupportedMetricsEnum[];
}
export declare class GetNetworkSensorAlertsCurrentOverviewByMetricResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSONObject?: GetNetworkSensorAlertsCurrentOverviewByMetric200ApplicationJSON;
}
