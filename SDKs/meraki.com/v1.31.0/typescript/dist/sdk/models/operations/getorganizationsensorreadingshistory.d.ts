import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSensorReadingsHistoryRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * Types of sensor readings to retrieve. If no metrics are supplied, all available types of readings will be retrieved. Allowed values are battery, button, door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water.
     */
    metrics?: string[];
    /**
     * Optional parameter to filter readings by network.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * Optional parameter to filter readings by sensor.
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 365 days and 6 hours from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours.
     */
    timespan?: number;
}
/**
 * Reading for the 'battery' metric. This will only be present if the 'metric' property equals 'battery'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONBattery extends SpeakeasyBase {
    /**
     * Remaining battery life.
     */
    percentage?: number;
}
/**
 * Type of button press that occurred.
 */
export declare enum GetOrganizationSensorReadingsHistory200ApplicationJSONButtonPressTypeEnum {
    Long = "long",
    Short = "short"
}
/**
 * Reading for the 'button' metric. This will only be present if the 'metric' property equals 'button'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONButton extends SpeakeasyBase {
    /**
     * Type of button press that occurred.
     */
    pressType?: GetOrganizationSensorReadingsHistory200ApplicationJSONButtonPressTypeEnum;
}
/**
 * Reading for the 'door' metric. This will only be present if the 'metric' property equals 'door'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONDoor extends SpeakeasyBase {
    /**
     * True if the door is open.
     */
    open?: boolean;
}
/**
 * Reading for the 'humidity' metric. This will only be present if the 'metric' property equals 'humidity'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONHumidity extends SpeakeasyBase {
    /**
     * Humidity reading in %RH.
     */
    relativePercentage?: number;
}
/**
 * Reading for the 'indoorAirQuality' metric. This will only be present if the 'metric' property equals 'indoorAirQuality'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONIndoorAirQuality extends SpeakeasyBase {
    /**
     * Indoor air quality score between 0 and 100.
     */
    score?: number;
}
/**
 * Type of sensor reading.
 */
export declare enum GetOrganizationSensorReadingsHistory200ApplicationJSONMetricEnum {
    Battery = "battery",
    Button = "button",
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
 * Network to which the sensor belongs.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONNetwork extends SpeakeasyBase {
    /**
     * ID of the network.
     */
    id?: string;
    /**
     * Name of the network.
     */
    name?: string;
}
/**
 * Ambient noise reading.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONNoiseAmbient extends SpeakeasyBase {
    /**
     * Ambient noise reading in adjusted decibels.
     */
    level?: number;
}
/**
 * Reading for the 'noise' metric. This will only be present if the 'metric' property equals 'noise'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONNoise extends SpeakeasyBase {
    /**
     * Ambient noise reading.
     */
    ambient?: GetOrganizationSensorReadingsHistory200ApplicationJSONNoiseAmbient;
}
/**
 * Reading for the 'pm25' metric. This will only be present if the 'metric' property equals 'pm25'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONPm25 extends SpeakeasyBase {
    /**
     * PM2.5 reading in micrograms per cubic meter.
     */
    concentration?: number;
}
/**
 * Reading for the 'temperature' metric. This will only be present if the 'metric' property equals 'temperature'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONTemperature extends SpeakeasyBase {
    /**
     * Temperature reading in degrees Celsius.
     */
    celsius?: number;
    /**
     * Temperature reading in degrees Fahrenheit.
     */
    fahrenheit?: number;
}
/**
 * Reading for the 'tvoc' metric. This will only be present if the 'metric' property equals 'tvoc'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONTvoc extends SpeakeasyBase {
    /**
     * TVOC reading in micrograms per cubic meter.
     */
    concentration?: number;
}
/**
 * Reading for the 'water' metric. This will only be present if the 'metric' property equals 'water'.
 */
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSONWater extends SpeakeasyBase {
    /**
     * True if water is detected.
     */
    present?: boolean;
}
export declare class GetOrganizationSensorReadingsHistory200ApplicationJSON extends SpeakeasyBase {
    /**
     * Reading for the 'battery' metric. This will only be present if the 'metric' property equals 'battery'.
     */
    battery?: GetOrganizationSensorReadingsHistory200ApplicationJSONBattery;
    /**
     * Reading for the 'button' metric. This will only be present if the 'metric' property equals 'button'.
     */
    button?: GetOrganizationSensorReadingsHistory200ApplicationJSONButton;
    /**
     * Reading for the 'door' metric. This will only be present if the 'metric' property equals 'door'.
     */
    door?: GetOrganizationSensorReadingsHistory200ApplicationJSONDoor;
    /**
     * Reading for the 'humidity' metric. This will only be present if the 'metric' property equals 'humidity'.
     */
    humidity?: GetOrganizationSensorReadingsHistory200ApplicationJSONHumidity;
    /**
     * Reading for the 'indoorAirQuality' metric. This will only be present if the 'metric' property equals 'indoorAirQuality'.
     */
    indoorAirQuality?: GetOrganizationSensorReadingsHistory200ApplicationJSONIndoorAirQuality;
    /**
     * Type of sensor reading.
     */
    metric?: GetOrganizationSensorReadingsHistory200ApplicationJSONMetricEnum;
    /**
     * Network to which the sensor belongs.
     */
    network?: GetOrganizationSensorReadingsHistory200ApplicationJSONNetwork;
    /**
     * Reading for the 'noise' metric. This will only be present if the 'metric' property equals 'noise'.
     */
    noise?: GetOrganizationSensorReadingsHistory200ApplicationJSONNoise;
    /**
     * Reading for the 'pm25' metric. This will only be present if the 'metric' property equals 'pm25'.
     */
    pm25?: GetOrganizationSensorReadingsHistory200ApplicationJSONPm25;
    /**
     * Serial number of the sensor that took the reading.
     */
    serial?: string;
    /**
     * Reading for the 'temperature' metric. This will only be present if the 'metric' property equals 'temperature'.
     */
    temperature?: GetOrganizationSensorReadingsHistory200ApplicationJSONTemperature;
    /**
     * Time at which the reading occurred, in ISO8601 format.
     */
    ts?: string;
    /**
     * Reading for the 'tvoc' metric. This will only be present if the 'metric' property equals 'tvoc'.
     */
    tvoc?: GetOrganizationSensorReadingsHistory200ApplicationJSONTvoc;
    /**
     * Reading for the 'water' metric. This will only be present if the 'metric' property equals 'water'.
     */
    water?: GetOrganizationSensorReadingsHistory200ApplicationJSONWater;
}
export declare class GetOrganizationSensorReadingsHistoryResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSensorReadingsHistory200ApplicationJSONObjects?: GetOrganizationSensorReadingsHistory200ApplicationJSON[];
}
