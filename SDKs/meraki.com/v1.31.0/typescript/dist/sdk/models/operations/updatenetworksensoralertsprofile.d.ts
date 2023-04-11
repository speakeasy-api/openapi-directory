import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If 'above', an alert will be sent when a sensor reads above the threshold. If 'below', an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds.
 */
export declare enum UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum {
    Above = "above",
    Below = "below"
}
/**
 * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0.
 */
export declare enum UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum {
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
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor extends SpeakeasyBase {
    /**
     * Alerting threshold for a door open event. Must be set to true.
     */
    open: boolean;
}
/**
 * Alerting threshold as a qualitative humidity level.
 */
export declare enum UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity extends SpeakeasyBase {
    /**
     * Alerting threshold as a qualitative humidity level.
     */
    quality?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidityQualityEnum;
    /**
     * Alerting threshold in %RH.
     */
    relativePercentage?: number;
}
/**
 * Alerting threshold as a qualitative indoor air quality level.
 */
export declare enum UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Indoor air quality score threshold. One of 'score' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality extends SpeakeasyBase {
    /**
     * Alerting threshold as a qualitative indoor air quality level.
     */
    quality?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQualityQualityEnum;
    /**
     * Alerting threshold as indoor air quality score.
     */
    score?: number;
}
/**
 * Alerting threshold as a qualitative ambient noise level.
 */
export declare enum UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Ambient noise threshold. One of 'level' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient extends SpeakeasyBase {
    /**
     * Alerting threshold as adjusted decibels.
     */
    level?: number;
    /**
     * Alerting threshold as a qualitative ambient noise level.
     */
    quality?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum;
}
/**
 * Noise threshold. 'ambient' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise extends SpeakeasyBase {
    /**
     * Ambient noise threshold. One of 'level' or 'quality' must be provided.
     */
    ambient: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient;
}
/**
 * Alerting threshold as a qualitative PM2.5 level.
 */
export declare enum UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25 extends SpeakeasyBase {
    /**
     * Alerting threshold as PM2.5 parts per million.
     */
    concentration?: number;
    /**
     * Alerting threshold as a qualitative PM2.5 level.
     */
    quality?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25QualityEnum;
}
/**
 * Alerting threshold as a qualitative temperature level.
 */
export declare enum UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature extends SpeakeasyBase {
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
    quality?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperatureQualityEnum;
}
/**
 * Alerting threshold as a qualitative TVOC level.
 */
export declare enum UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc extends SpeakeasyBase {
    /**
     * Alerting threshold as TVOC micrograms per cubic meter.
     */
    concentration?: number;
    /**
     * Alerting threshold as a qualitative TVOC level.
     */
    quality?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvocQualityEnum;
}
/**
 * Water detection threshold. 'present' must be provided and set to true.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater extends SpeakeasyBase {
    /**
     * Alerting threshold for a water detection event. Must be set to true.
     */
    present: boolean;
}
/**
 * Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold extends SpeakeasyBase {
    /**
     * Door open threshold. 'open' must be provided and set to true.
     */
    door?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdDoor;
    /**
     * Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.
     */
    humidity?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdHumidity;
    /**
     * Indoor air quality score threshold. One of 'score' or 'quality' must be provided.
     */
    indoorAirQuality?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdIndoorAirQuality;
    /**
     * Noise threshold. 'ambient' must be provided.
     */
    noise?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoise;
    /**
     * PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.
     */
    pm25?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdPm25;
    /**
     * Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.
     */
    temperature?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTemperature;
    /**
     * TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.
     */
    tvoc?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdTvoc;
    /**
     * Water detection threshold. 'present' must be provided and set to true.
     */
    water?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThresholdWater;
}
export declare class UpdateNetworkSensorAlertsProfileRequestBodyConditions extends SpeakeasyBase {
    /**
     * If 'above', an alert will be sent when a sensor reads above the threshold. If 'below', an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds.
     */
    direction?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsDirectionEnum;
    /**
     * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0.
     */
    duration?: UpdateNetworkSensorAlertsProfileRequestBodyConditionsDurationEnum;
    /**
     * The type of sensor metric that will be monitored for changes. Available metrics are door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water.
     */
    metric: string;
    /**
     * Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.
     */
    threshold: UpdateNetworkSensorAlertsProfileRequestBodyConditionsThreshold;
}
/**
 * List of recipients that will recieve the alert.
 */
export declare class UpdateNetworkSensorAlertsProfileRequestBodyRecipients extends SpeakeasyBase {
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
export declare class UpdateNetworkSensorAlertsProfileRequestBodySchedule extends SpeakeasyBase {
    /**
     * ID of the sensor schedule to use with the alert profile. If not defined, the alert profile will be active at all times.
     */
    id?: string;
}
export declare class UpdateNetworkSensorAlertsProfileRequestBody extends SpeakeasyBase {
    /**
     * List of conditions that will cause the profile to send an alert.
     */
    conditions?: UpdateNetworkSensorAlertsProfileRequestBodyConditions[];
    /**
     * Name of the sensor alert profile.
     */
    name?: string;
    /**
     * List of recipients that will recieve the alert.
     */
    recipients?: UpdateNetworkSensorAlertsProfileRequestBodyRecipients;
    /**
     * The sensor schedule to use with the alert profile.
     */
    schedule?: UpdateNetworkSensorAlertsProfileRequestBodySchedule;
    /**
     * List of device serials assigned to this sensor alert profile.
     */
    serials?: string[];
}
export declare class UpdateNetworkSensorAlertsProfileRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSensorAlertsProfileRequestBody;
    id: string;
    networkId: string;
}
/**
 * If 'above', an alert will be sent when a sensor reads above the threshold. If 'below', an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds.
 */
export declare enum UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsDirectionEnum {
    Above = "above",
    Below = "below"
}
/**
 * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0.
 */
export declare enum UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsDurationEnum {
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
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdDoor extends SpeakeasyBase {
    /**
     * Alerting threshold for a door open event. Must be set to true.
     */
    open: boolean;
}
/**
 * Alerting threshold as a qualitative humidity level.
 */
export declare enum UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdHumidityQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdHumidity extends SpeakeasyBase {
    /**
     * Alerting threshold as a qualitative humidity level.
     */
    quality?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdHumidityQualityEnum;
    /**
     * Alerting threshold in %RH.
     */
    relativePercentage?: number;
}
/**
 * Alerting threshold as a qualitative indoor air quality level.
 */
export declare enum UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdIndoorAirQualityQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Indoor air quality score threshold. One of 'score' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdIndoorAirQuality extends SpeakeasyBase {
    /**
     * Alerting threshold as a qualitative indoor air quality level.
     */
    quality?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdIndoorAirQualityQualityEnum;
    /**
     * Alerting threshold as indoor air quality score.
     */
    score?: number;
}
/**
 * Alerting threshold as a qualitative ambient noise level.
 */
export declare enum UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoiseAmbientQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Ambient noise threshold. One of 'level' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoiseAmbient extends SpeakeasyBase {
    /**
     * Alerting threshold as adjusted decibels.
     */
    level?: number;
    /**
     * Alerting threshold as a qualitative ambient noise level.
     */
    quality?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoiseAmbientQualityEnum;
}
/**
 * Noise threshold. 'ambient' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoise extends SpeakeasyBase {
    /**
     * Ambient noise threshold. One of 'level' or 'quality' must be provided.
     */
    ambient: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoiseAmbient;
}
/**
 * Alerting threshold as a qualitative PM2.5 level.
 */
export declare enum UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdPm25QualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdPm25 extends SpeakeasyBase {
    /**
     * Alerting threshold as PM2.5 parts per million.
     */
    concentration?: number;
    /**
     * Alerting threshold as a qualitative PM2.5 level.
     */
    quality?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdPm25QualityEnum;
}
/**
 * Alerting threshold as a qualitative temperature level.
 */
export declare enum UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTemperatureQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTemperature extends SpeakeasyBase {
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
    quality?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTemperatureQualityEnum;
}
/**
 * Alerting threshold as a qualitative TVOC level.
 */
export declare enum UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTvocQualityEnum {
    Fair = "fair",
    Good = "good",
    Inadequate = "inadequate",
    Poor = "poor"
}
/**
 * TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTvoc extends SpeakeasyBase {
    /**
     * Alerting threshold as TVOC micrograms per cubic meter.
     */
    concentration?: number;
    /**
     * Alerting threshold as a qualitative TVOC level.
     */
    quality?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTvocQualityEnum;
}
/**
 * Water detection threshold. 'present' must be provided and set to true.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdWater extends SpeakeasyBase {
    /**
     * Alerting threshold for a water detection event. Must be set to true.
     */
    present: boolean;
}
/**
 * Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThreshold extends SpeakeasyBase {
    /**
     * Door open threshold. 'open' must be provided and set to true.
     */
    door?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdDoor;
    /**
     * Humidity threshold. One of 'relativePercentage' or 'quality' must be provided.
     */
    humidity?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdHumidity;
    /**
     * Indoor air quality score threshold. One of 'score' or 'quality' must be provided.
     */
    indoorAirQuality?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdIndoorAirQuality;
    /**
     * Noise threshold. 'ambient' must be provided.
     */
    noise?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdNoise;
    /**
     * PM2.5 concentration threshold. One of 'concentration' or 'quality' must be provided.
     */
    pm25?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdPm25;
    /**
     * Temperature threshold. One of 'celsius', 'fahrenheit', or 'quality' must be provided.
     */
    temperature?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTemperature;
    /**
     * TVOC concentration threshold. One of 'concentration' or 'quality' must be provided.
     */
    tvoc?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdTvoc;
    /**
     * Water detection threshold. 'present' must be provided and set to true.
     */
    water?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThresholdWater;
}
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONConditions extends SpeakeasyBase {
    /**
     * If 'above', an alert will be sent when a sensor reads above the threshold. If 'below', an alert will be sent when a sensor reads below the threshold. Only applicable for temperature and humidity thresholds.
     */
    direction?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsDirectionEnum;
    /**
     * Length of time in seconds that the triggering state must persist before an alert is sent. Available options are 0 seconds, 1 minute, 2 minutes, 3 minutes, 4 minutes, 5 minutes, 10 minutes, 15 minutes, 30 minutes, and 1 hour. Default is 0.
     */
    duration?: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsDurationEnum;
    /**
     * The type of sensor metric that will be monitored for changes. Available metrics are door, humidity, indoorAirQuality, noise, pm25, temperature, tvoc, and water.
     */
    metric: string;
    /**
     * Threshold for sensor readings that will cause an alert to be sent. This object should contain a single property key matching the condition's 'metric' value.
     */
    threshold: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditionsThreshold;
}
/**
 * List of recipients that will recieve the alert.
 */
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONRecipients extends SpeakeasyBase {
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
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSONSchedule extends SpeakeasyBase {
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
export declare class UpdateNetworkSensorAlertsProfile200ApplicationJSON extends SpeakeasyBase {
    /**
     * List of conditions that will cause the profile to send an alert.
     */
    conditions: UpdateNetworkSensorAlertsProfile200ApplicationJSONConditions[];
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
    recipients?: UpdateNetworkSensorAlertsProfile200ApplicationJSONRecipients;
    /**
     * The sensor schedule to use with the alert profile.
     */
    schedule?: UpdateNetworkSensorAlertsProfile200ApplicationJSONSchedule;
    /**
     * List of device serials assigned to this sensor alert profile.
     */
    serials?: string[];
}
export declare class UpdateNetworkSensorAlertsProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSensorAlertsProfile200ApplicationJSONObject?: UpdateNetworkSensorAlertsProfile200ApplicationJSON;
}
