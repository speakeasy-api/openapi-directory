import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetmeasureSecurity extends SpeakeasyBase {
    codeOauth?: string;
    passwordOauth?: string;
}
/**
 * Defines the time interval between two measurements.
 *
 * @remarks
 * Possible values :
 * max -> every value stored will be returned
 * 30min -> 1 value every 30 minutes
 * 1hour -> 1 value every hour
 * 3hours -> 1 value every 3 hours
 * 1day -> 1 value per day
 * 1week -> 1 value per week
 * 1month -> 1 value per month
 *
 */
export declare enum GetmeasureScaleEnum {
    Max = "max",
    Thirtymin = "30min",
    Onehour = "1hour",
    Threehours = "3hours",
    Oneday = "1day",
    Oneweek = "1week",
    Onemonth = "1month"
}
export declare enum GetmeasureTypeEnum {
    Temperature = "Temperature",
    Co2 = "CO2",
    Humidity = "Humidity",
    Pressure = "Pressure",
    Noise = "Noise",
    Rain = "Rain",
    WindStrength = "WindStrength",
    WindAngle = "WindAngle",
    Guststrength = "Guststrength",
    GustAngle = "GustAngle",
    SpTemperature = "Sp_Temperature",
    BoilerOn = "BoilerOn",
    BoilerOff = "BoilerOff",
    MinTemp = "min_temp",
    DateMinTemp = "date_min_temp",
    MaxTemp = "max_temp",
    DateMaxTemp = "date_max_temp",
    MinHum = "min_hum",
    DateMinHum = "date_min_hum",
    MaxHum = "max_hum",
    DateMaxHum = "date_max_hum",
    MinPressure = "min_pressure",
    DateMinPressure = "date_min_pressure",
    MaxPressure = "max_pressure",
    DateMaxPressure = "date_max_pressure",
    MinNoise = "min_noise",
    DateMinNoise = "date_min_noise",
    MaxNoise = "max_noise",
    DateMaxNoise = "date_max_noise",
    DateMinCo2 = "date_min_co2",
    DateMaxCo2 = "date_max_co2",
    DateMaxGust = "date_max_gust",
    SumRain = "sum_rain",
    SumBoilerOn = "sum_boiler_on",
    SumBoilerOff = "sum_boiler_off"
}
export declare class GetmeasureRequest extends SpeakeasyBase {
    /**
     * Starting timestamp (utc) of the requested measurements.
     *
     * @remarks
     * Please note measurement retrieving is limited to 1024 measurements.
     *
     */
    dateBegin?: number;
    /**
     * Ending timestamp (utc) of the request measurements.
     *
     * @remarks
     * If you want only the last measurement, do not provide date_begin, and set date_end to `last`.
     *
     */
    dateEnd?: string;
    /**
     * Id of the device whose module's measurements you want to retrieve. This _id can be found in the user's devices field.
     */
    deviceId: string;
    /**
     * Limits the number of measurements returned (default & max is 1024)
     */
    limit?: number;
    /**
     * If you don't specify any module_id you will retrieve the device's measurements. If you specify a module_id you will retrieve the module's measurements.
     */
    moduleId?: string;
    /**
     * Allows you to choose the format of the answer.
     *
     * @remarks
     * If you build a mobile app and bandwith usage is an issue, use `optimize = true`.
     * Use `optimize = false`, for an easier parse. In this case, values are indexed by sorted timestamp.
     * Example of un-optimized response :
     * ```json
     * {"status": "ok",
     *   "body": {
     *     "1347575400": [18.3,39],
     *     "1347586200": [20.6,48]
     *   },
     * "time_exec": 0.012136936187744}
     * ```
     * If optimize is set true, measurements are returned as an array of series of regularly spaced measurements. Each series is defined by a beginning time beg_time and a step between measurements, step_time:
     * ```json
     * {"status": "ok",
     *   "body": [
     *     {"beg_time": 1347575400,
     *      "step_time": 10800,
     *      "value":
     *         [[18.3,39],
     *         [ 20.6,48]]
     *     }],
     * "time_exec": 0.014238119125366}
     * ```
     * Default value is `true`.
     *
     */
    optimize?: boolean;
    /**
     * In scales higher than max, since the data is aggregated, the timestamps returned are by default offset by +(scale/2).
     *
     * @remarks
     * For instance, if you ask for measurements at a daily scale, you will receive data timestamped at 12:00 if real_time is set to `false` (default case), and timestamped at 00:00 if real_time is set to `true`.
     * NB : The servers always store data with real_time set to `true` and data are offset by this parameter AFTER having being time-filtered, thus you could have data after date_end if real_time is set to `false`.
     *
     */
    realTime?: boolean;
    /**
     * Defines the time interval between two measurements.
     *
     * @remarks
     * Possible values :
     * max -> every value stored will be returned
     * 30min -> 1 value every 30 minutes
     * 1hour -> 1 value every hour
     * 3hours -> 1 value every 3 hours
     * 1day -> 1 value per day
     * 1week -> 1 value per week
     * 1month -> 1 value per month
     *
     */
    scale: GetmeasureScaleEnum;
    /**
     * Measures you are interested in. Data you can request depends on the scale.
     *
     * @remarks
     * **For Weather Station:**
     *   * max -> Temperature (°C), CO2 (ppm), Humidity (%), Pressure (mbar), Noise (db), Rain (mm), WindStrength (km/h), WindAngle (angles), Guststrength (km/h), GustAngle (angles)
     *   * 30min, 1hour, 3hours -> Same as above + min_temp, max_temp, min_hum, max_hum, min_pressure, max_pressure, min_noise, max_noise, sum_rain, date_max_gust
     *   * 1day, 1week, 1month -> Same as above + date_min_temp, date_max_temp, date_min_hum, date_max_hum, date_min_pressure, date_max_pressure, date_min_noise, date_max_noise, date_min_co2, date_max_co2
     *
     * **For Thermostat:**
     *   * max -> temperature (°C), sp_temperature (°C), boileron (sec), boileroff (sec)
     *   * 30min, 1hour, 3hours -> temperature, sp_temperature, min_temp,
     * max_temp, sum_boiler_on, sum_boiler_off
     *   * 1day, 1week, 1month -> temperature, min_temp, date_min_temp,
     * max_temp, sum_boiler_on, sum_boiler_off
     *
     */
    type: GetmeasureTypeEnum[];
}
export declare class GetmeasureResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    naMeasureResponse?: shared.NAMeasureResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
