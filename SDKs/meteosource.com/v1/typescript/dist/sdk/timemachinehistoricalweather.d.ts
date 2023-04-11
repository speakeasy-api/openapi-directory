import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TimeMachineHistoricalWeather {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns weather data for a single location and given day in the past
     *
     * @remarks
     * ## Actual weather data for a single location and day in the past
     *
     * The output contains actual weather data for each day up to 8 years in the past, and long-term statistics of selected weather variables aggregated over 40 years.
     *
     * ### Location specification
     * The location of the weather data must be specified. There are two ways to do this:
     * 1. Specify the GPS coordinates of the location using the parameters `lat` and `lon`.
     * 2. **OR** specify the name of the place using the parameter `place_id`. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
     *
     * *Note: For mountains, it is usually better to specify the `place_id` rather than the `lat` and `lon`. When you use `place_id`, you are guaranteed to receive data for the precise elevation of the peak. When you specify the coordinates, the elevation can be less precise.*
     *
     */
    timeMachineTimeMachineGet(req: operations.TimeMachineTimeMachineGetRequest, security: operations.TimeMachineTimeMachineGetSecurity, config?: AxiosRequestConfig): Promise<operations.TimeMachineTimeMachineGetResponse>;
}
