import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If 'above', an alert will be sent when a sensor reads above the threshold. If 'below', an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds.
 */
export declare enum CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum {
    Above = "above",
    Below = "below"
}
/**
 * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0.
 */
export declare enum CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum {
    Zero = "0",
    Sixty = "60",
    OneHundredAndTwenty = "120",
    OneHundredAndEighty = "180",
    TwoHundredAndForty = "240",
    ThreeHundred = "300",
    SixHundred = "600",
    NineHundred = "900",
    OneThousandEightHundred = "1800",
    ThreeThousandSixHundred = "3600"
}
/**
 * Door open threshold. 'open' must be provided and set to true.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor extends SpeakeasyBase {
    /**
     * Alerting threshold for a door open event. Must be set to true.
     */
    open: boolean;
}
/**
 * Alerting threshold as a qualitative humidity level.
 */
export declare enum CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity extends SpeakeasyBase {
    /**
     * Alerting threshold as a qualitative humidity level.
     */
    quality?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum;
    /**
     * Alerting threshold in %RH.
     */
    relativePercentage?: number;
}
/**
 * Alerting threshold as a qualitative indoor air quality level.
 */
export declare enum CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Indoor air quality score threshold. One of 'score' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality extends SpeakeasyBase {
    /**
     * Alerting threshold as a qualitative indoor air quality level.
     */
    quality?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum;
    /**
     * Alerting threshold as indoor air quality score.
     */
    score?: number;
}
/**
 * Alerting threshold as a qualitative ambient noise level.
 */
export declare enum CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Ambient noise threshold. One of 'level' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient extends SpeakeasyBase {
    /**
     * Alerting threshold as adjusted decibels.
     */
    level?: number;
    /**
     * Alerting threshold as a qualitative ambient noise level.
     */
    quality?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum;
}
/**
 * Noise threshold. 'ambient' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise extends SpeakeasyBase {
    /**
     * Ambient noise threshold. One of 'level' or 'quality' must be provided.
     */
    ambient: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient;
}
/**
 * Alerting threshold as a qualitative PM2.5 level.
 */
export declare enum CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25 extends SpeakeasyBase {
    /**
     * Alerting threshold as PM2.5 parts per million.
     */
    concentration?: number;
    /**
     * Alerting threshold as a qualitative PM2.5 level.
     */
    quality?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum;
}
/**
 * Alerting threshold as a qualitative temperature level.
 */
export declare enum CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature extends SpeakeasyBase {
    /**
     * Alerting threshold in degrees Celsius.
     */
    celsius?: number;
    /**
     * Alerting threshold in degrees Fahrenheit.
     */
    fahrenheit?: number;
    /**
     * Alerting threshold as a qualitative temperature level.
     */
    quality?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum;
}
/**
 * Alerting threshold as a qualitative TVOC level.
 */
export declare enum CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc extends SpeakeasyBase {
    /**
     * Alerting threshold as TVOC micrograms per cubic meter.
     */
    concentration?: number;
    /**
     * Alerting threshold as a qualitative TVOC level.
     */
    quality?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum;
}
/**
 * Water detection threshold. 'present' must be provided and set to true.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater extends SpeakeasyBase {
    /**
     * Alerting threshold for a water detection event. Must be set to true.
     */
    present: boolean;
}
/**
 * Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold extends SpeakeasyBase {
    /**
     * Door open threshold. 'open' must be provided and set to true.
     */
    door?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor;
    /**
     * Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.
     */
    humidity?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity;
    /**
     * Indoor air quality score threshold. One of 'score' or 'quality' must be provided.
     */
    indoorAirQuality?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality;
    /**
     * Noise threshold. 'ambient' must be provided.
     */
    noise?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise;
    /**
     * PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.
     */
    pm25?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25;
    /**
     * Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.
     */
    temperature?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature;
    /**
     * TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.
     */
    tvoc?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc;
    /**
     * Water detection threshold. 'present' must be provided and set to true.
     */
    water?: CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater;
}
export declare class CreateNetworkSensorAlertsProfileRequestBodyConditions extends SpeakeasyBase {
    /**
     * If 'above', an alert will be sent when a sensor reads above the threshold. If 'below', an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds.
     */
    direction?: CreateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum;
    /**
     * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0.
     */
    duration?: CreateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum;
    /**
     * The type of sensor metric that will be monitored for changes. Available metrics are door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water.
     */
    metric: string;
    /**
     * Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.
     */
    threshold: CreateNetworkSensorAlertsProfileRequestBodyConditionsThreshold;
}
/**
 * List of recipients that will recieve the alert.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodyRecipients extends SpeakeasyBase {
    /**
     * A list of emails that will receive information about the alert.
     */
    emails?: string[];
    /**
     * A list of webhook endpoint IDs that will receive information about the alert.
     */
    httpServerIds?: string[];
    /**
     * A list of SMS numbers that will receive information about the alert.
     */
    smsNumbers?: string[];
}
/**
 * The sensor schedule to use with the alert profile.
 */
export declare class CreateNetworkSensorAlertsProfileRequestBodySchedule extends SpeakeasyBase {
    /**
     * ID of the sensor schedule to use with the alert profile. If not defined, the alert profile will be active at all times.
     */
    id?: string;
}
export declare class CreateNetworkSensorAlertsProfileRequestBody extends SpeakeasyBase {
    /**
     * List of conditions that will cause the profile to send an alert.
     */
    conditions: CreateNetworkSensorAlertsProfileRequestBodyConditions[];
    /**
     * Name of the sensor alert profile.
     */
    name: string;
    /**
     * List of recipients that will recieve the alert.
     */
    recipients?: CreateNetworkSensorAlertsProfileRequestBodyRecipients;
    /**
     * The sensor schedule to use with the alert profile.
     */
    schedule?: CreateNetworkSensorAlertsProfileRequestBodySchedule;
    /**
     * List of device serials assigned to this sensor alert profile.
     */
    serials?: string[];
}
export declare class CreateNetworkSensorAlertsProfileRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSensorAlertsProfileRequestBody;
    networkId: string;
}
/**
 * If 'above', an alert will be sent when a sensor reads above the threshold. If 'below', an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds.
 */
export declare enum CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsDirectionEnum {
    Above = "above",
    Below = "below"
}
/**
 * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0.
 */
export declare enum CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsDurationEnum {
    Zero = "0",
    Sixty = "60",
    OneHundredAndTwenty = "120",
    OneHundredAndEighty = "180",
    TwoHundredAndForty = "240",
    ThreeHundred = "300",
    SixHundred = "600",
    NineHundred = "900",
    OneThousandEightHundred = "1800",
    ThreeThousandSixHundred = "3600"
}
/**
 * Door open threshold. 'open' must be provided and set to true.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdDoor extends SpeakeasyBase {
    /**
     * Alerting threshold for a door open event. Must be set to true.
     */
    open: boolean;
}
/**
 * Alerting threshold as a qualitative humidity level.
 */
export declare enum CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdHumidityQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdHumidity extends SpeakeasyBase {
    /**
     * Alerting threshold as a qualitative humidity level.
     */
    quality?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdHumidityQualityEnum;
    /**
     * Alerting threshold in %RH.
     */
    relativePercentage?: number;
}
/**
 * Alerting threshold as a qualitative indoor air quality level.
 */
export declare enum CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdIndoorAirQualityQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Indoor air quality score threshold. One of 'score' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdIndoorAirQuality extends SpeakeasyBase {
    /**
     * Alerting threshold as a qualitative indoor air quality level.
     */
    quality?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdIndoorAirQualityQualityEnum;
    /**
     * Alerting threshold as indoor air quality score.
     */
    score?: number;
}
/**
 * Alerting threshold as a qualitative ambient noise level.
 */
export declare enum CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoiseAmbientQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Ambient noise threshold. One of 'level' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoiseAmbient extends SpeakeasyBase {
    /**
     * Alerting threshold as adjusted decibels.
     */
    level?: number;
    /**
     * Alerting threshold as a qualitative ambient noise level.
     */
    quality?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoiseAmbientQualityEnum;
}
/**
 * Noise threshold. 'ambient' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoise extends SpeakeasyBase {
    /**
     * Ambient noise threshold. One of 'level' or 'quality' must be provided.
     */
    ambient: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoiseAmbient;
}
/**
 * Alerting threshold as a qualitative PM2.5 level.
 */
export declare enum CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdPm25QualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdPm25 extends SpeakeasyBase {
    /**
     * Alerting threshold as PM2.5 parts per million.
     */
    concentration?: number;
    /**
     * Alerting threshold as a qualitative PM2.5 level.
     */
    quality?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdPm25QualityEnum;
}
/**
 * Alerting threshold as a qualitative temperature level.
 */
export declare enum CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTemperatureQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTemperature extends SpeakeasyBase {
    /**
     * Alerting threshold in degrees Celsius.
     */
    celsius?: number;
    /**
     * Alerting threshold in degrees Fahrenheit.
     */
    fahrenheit?: number;
    /**
     * Alerting threshold as a qualitative temperature level.
     */
    quality?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTemperatureQualityEnum;
}
/**
 * Alerting threshold as a qualitative TVOC level.
 */
export declare enum CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTvocQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTvoc extends SpeakeasyBase {
    /**
     * Alerting threshold as TVOC micrograms per cubic meter.
     */
    concentration?: number;
    /**
     * Alerting threshold as a qualitative TVOC level.
     */
    quality?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTvocQualityEnum;
}
/**
 * Water detection threshold. 'present' must be provided and set to true.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdWater extends SpeakeasyBase {
    /**
     * Alerting threshold for a water detection event. Must be set to true.
     */
    present: boolean;
}
/**
 * Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThreshold extends SpeakeasyBase {
    /**
     * Door open threshold. 'open' must be provided and set to true.
     */
    door?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdDoor;
    /**
     * Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.
     */
    humidity?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdHumidity;
    /**
     * Indoor air quality score threshold. One of 'score' or 'quality' must be provided.
     */
    indoorAirQuality?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdIndoorAirQuality;
    /**
     * Noise threshold. 'ambient' must be provided.
     */
    noise?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoise;
    /**
     * PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.
     */
    pm25?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdPm25;
    /**
     * Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.
     */
    temperature?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTemperature;
    /**
     * TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.
     */
    tvoc?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTvoc;
    /**
     * Water detection threshold. 'present' must be provided and set to true.
     */
    water?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdWater;
}
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONConditions extends SpeakeasyBase {
    /**
     * If 'above', an alert will be sent when a sensor reads above the threshold. If 'below', an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds.
     */
    direction?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsDirectionEnum;
    /**
     * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0.
     */
    duration?: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsDurationEnum;
    /**
     * The type of sensor metric that will be monitored for changes. Available metrics are door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water.
     */
    metric: string;
    /**
     * Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.
     */
    threshold: CreateNetworkSensorAlertsProfile200ApplicationJSONConditionsThreshold;
}
/**
 * List of recipients that will recieve the alert.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONRecipients extends SpeakeasyBase {
    /**
     * A list of emails that will receive information about the alert.
     */
    emails?: string[];
    /**
     * A list of webhook endpoint IDs that will receive information about the alert.
     */
    httpServerIds?: string[];
    /**
     * A list of SMS numbers that will receive information about the alert.
     */
    smsNumbers?: string[];
}
/**
 * The sensor schedule to use with the alert profile.
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSONSchedule extends SpeakeasyBase {
    /**
     * ID of the sensor schedule to use with the alert profile. If not defined, the alert profile will be active at all times.
     */
    id?: string;
    /**
     * Name of the sensor schedule to use with the alert profile.
     */
    name?: string;
}
/**
 * Successful operation
 */
export declare class CreateNetworkSensorAlertsProfile200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of conditions that will cause the profile to send an alert.
     */
    conditions: CreateNetworkSensorAlertsProfile200ApplicationJSONConditions[];
    /**
     * Name of the sensor alert profile.
     */
    name?: string;
    /**
     * ID of the sensor alert profile.
     */
    profileId?: string;
    /**
     * List of recipients that will recieve the alert.
     */
    recipients?: CreateNetworkSensorAlertsProfile200ApplicationJSONRecipients;
    /**
     * The sensor schedule to use with the alert profile.
     */
    schedule?: CreateNetworkSensorAlertsProfile200ApplicationJSONSchedule;
    /**
     * List of device serials assigned to this sensor alert profile.
     */
    serials?: string[];
}
export declare class CreateNetworkSensorAlertsProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSensorAlertsProfile200ApplicationJSONObject?: CreateNetworkSensorAlertsProfile200ApplicationJSON;
}
