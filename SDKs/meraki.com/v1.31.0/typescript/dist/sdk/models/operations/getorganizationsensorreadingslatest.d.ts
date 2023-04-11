import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationSensorReadingsLatestRequest extends SpeakeasyBase {
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
     * The number of entries per page returned. Acceptable range is 3 - 100. Default is 100.
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
}
/**
 * Network to which the sensor belongs.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONNetwork extends SpeakeasyBase {
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
 * Reading for the 'battery' metric. This will only be present if the 'metric' property equals 'battery'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsBattery extends SpeakeasyBase {
    /**
     * Remaining battery life.
     */
    percentage?: number;
}
/**
 * Type of button press that occurred.
 */
export declare enum GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsButtonPressTypeEnum {
    Long = "long",
    Short = "short"
}
/**
 * Reading for the 'button' metric. This will only be present if the 'metric' property equals 'button'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsButton extends SpeakeasyBase {
    /**
     * Type of button press that occurred.
     */
    pressType?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsButtonPressTypeEnum;
}
/**
 * Reading for the 'door' metric. This will only be present if the 'metric' property equals 'door'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsDoor extends SpeakeasyBase {
    /**
     * True if the door is open.
     */
    open?: boolean;
}
/**
 * Reading for the 'humidity' metric. This will only be present if the 'metric' property equals 'humidity'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsHumidity extends SpeakeasyBase {
    /**
     * Humidity reading in %RH.
     */
    relativePercentage?: number;
}
/**
 * Reading for the 'indoorAirQuality' metric. This will only be present if the 'metric' property equals 'indoorAirQuality'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsIndoorAirQuality extends SpeakeasyBase {
    /**
     * Indoor air quality score between 0 and 100.
     */
    score?: number;
}
/**
 * Type of sensor reading.
 */
export declare enum GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsMetricEnum {
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
 * Ambient noise reading.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsNoiseAmbient extends SpeakeasyBase {
    /**
     * Ambient noise reading in adjusted decibels.
     */
    level?: number;
}
/**
 * Reading for the 'noise' metric. This will only be present if the 'metric' property equals 'noise'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsNoise extends SpeakeasyBase {
    /**
     * Ambient noise reading.
     */
    ambient?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsNoiseAmbient;
}
/**
 * Reading for the 'pm25' metric. This will only be present if the 'metric' property equals 'pm25'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsPm25 extends SpeakeasyBase {
    /**
     * PM2.5 reading in micrograms per cubic meter.
     */
    concentration?: number;
}
/**
 * Reading for the 'temperature' metric. This will only be present if the 'metric' property equals 'temperature'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsTemperature extends SpeakeasyBase {
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
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsTvoc extends SpeakeasyBase {
    /**
     * TVOC reading in micrograms per cubic meter.
     */
    concentration?: number;
}
/**
 * Reading for the 'water' metric. This will only be present if the 'metric' property equals 'water'.
 */
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsWater extends SpeakeasyBase {
    /**
     * True if water is detected.
     */
    present?: boolean;
}
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSONReadings extends SpeakeasyBase {
    /**
     * Reading for the 'battery' metric. This will only be present if the 'metric' property equals 'battery'.
     */
    battery?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsBattery;
    /**
     * Reading for the 'button' metric. This will only be present if the 'metric' property equals 'button'.
     */
    button?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsButton;
    /**
     * Reading for the 'door' metric. This will only be present if the 'metric' property equals 'door'.
     */
    door?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsDoor;
    /**
     * Reading for the 'humidity' metric. This will only be present if the 'metric' property equals 'humidity'.
     */
    humidity?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsHumidity;
    /**
     * Reading for the 'indoorAirQuality' metric. This will only be present if the 'metric' property equals 'indoorAirQuality'.
     */
    indoorAirQuality?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsIndoorAirQuality;
    /**
     * Type of sensor reading.
     */
    metric?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsMetricEnum;
    /**
     * Reading for the 'noise' metric. This will only be present if the 'metric' property equals 'noise'.
     */
    noise?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsNoise;
    /**
     * Reading for the 'pm25' metric. This will only be present if the 'metric' property equals 'pm25'.
     */
    pm25?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsPm25;
    /**
     * Reading for the 'temperature' metric. This will only be present if the 'metric' property equals 'temperature'.
     */
    temperature?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsTemperature;
    /**
     * Time at which the reading occurred, in ISO8601 format.
     */
    ts?: string;
    /**
     * Reading for the 'tvoc' metric. This will only be present if the 'metric' property equals 'tvoc'.
     */
    tvoc?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsTvoc;
    /**
     * Reading for the 'water' metric. This will only be present if the 'metric' property equals 'water'.
     */
    water?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsWater;
}
export declare class GetOrganizationSensorReadingsLatest200ApplicationJSON extends SpeakeasyBase {
    /**
     * Network to which the sensor belongs.
     */
    network?: GetOrganizationSensorReadingsLatest200ApplicationJSONNetwork;
    /**
     * Array of latest readings from the sensor. Each object represents a single reading for a single metric.
     */
    readings?: GetOrganizationSensorReadingsLatest200ApplicationJSONReadings[];
    /**
     * Serial number of the sensor that took the readings.
     */
    serial?: string;
}
export declare class GetOrganizationSensorReadingsLatestResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationSensorReadingsLatest200ApplicationJSONObjects?: GetOrganizationSensorReadingsLatest200ApplicationJSON[];
}
