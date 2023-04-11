import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PointWeather {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns air quality data for a single point (geographic name or GPS)
     *
     * @remarks
     * ## Air quality forecast for a single location
     *
     * ### Location specification
     * The location of the weather data is the only parameter that is required and must be specified. There are two ways to do this:
     * 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
     * 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
     *
     * ### Notes
     * * **For a detailed description of variables, please consult ⚠️ <a href="https://www.meteosource.com/documentation#description_aq" target="_blank">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).**
     * * Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them.
     * * The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**.
     * * Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request.
     * * When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).
     *
     */
    airQualityAirQualityGet(req: operations.AirQualityAirQualityGetRequest, security: operations.AirQualityAirQualityGetSecurity, config?: AxiosRequestConfig): Promise<operations.AirQualityAirQualityGetResponse>;
    /**
     * Returns weather data for a single point (geographic name or GPS)
     *
     * @remarks
     * ## Current weather and forecast for single location
     *
     * ### Location specification
     * The location of the weather data is the only parameter that is required and must be specified. There are two ways to do this:
     * 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
     * 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
     *
     * *Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive forecasts for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*
     *
     * ### Sections
     * The endpoint can return multiple sections of data. To obtain the best performance, we advise only requesting the sections you actually need. The available sections are as follows:
     *
     * * Current weather situation
     * * Hourly forecast (for 24/48/96/168 hours, depending on the tier)
     * * Daily forecast (for 7/10/30 days, depending on the tier)
     * * Minutely precipitation forecast (for 60 minutes in the following hour, only for higher tiers)
     * * Weather alerts (only for higher tiers)
     *
     * By default, only the current and hourly sections are returned. The division into daily parts (morning, afternoon and evening) is only available for the first 7 days of the forecast. For details regarding available parameters, see the parameter description below.
     *
     * ### Notes
     * * **For a detailed description of variables (e.g. icons), please consult ⚠️ <a href="https://www.meteosource.com/documentation#description" target="_blank">description of variables</a> ⚠️ in Documentation or `Schema` of the response (link next to Example value in the Responses section below).**
     * * Variables can be instantaneous, averaged, or accumulated over certain time. For example, `precipitation` forecast provides the precipitation accumulated until the next hour (data with timestamp as `12:00:00` is rain accumulated from `12:00:00` to `13:00:00`).
     * * Do **not** make any assumptions about the number and ordering of the variables. New variables and sections may be introduced in the future. Always check the data are present before you try to use them.
     * * The response contains an `Expires` header, which defines the point at which the API response will not change for the same request. We highly recommend using this to avoid unnecessary requests and **increase the performance of your app**.
     * * Meteosource API supports HTTP compression. To enable it, simply add an `Accept-Encoding: gzip` header to your request.
     * * When daylight saving time starts, one hourly record will be missing (typically `2:00:00 AM`). When daylight saving time ends, the hourly forecast will contain two records with duplicate times (typically `2:00:00 AM`).
     * * The detailed description of weather alerts is only available in English. The alert category is translated into selected language.
     *
     */
    pointPointGet(req: operations.PointPointGetRequest, security: operations.PointPointGetSecurity, config?: AxiosRequestConfig): Promise<operations.PointPointGetResponse>;
}
