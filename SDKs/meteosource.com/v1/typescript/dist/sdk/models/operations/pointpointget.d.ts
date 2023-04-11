import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PointPointGetSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
/**
 * An enumeration.
 */
export declare enum PointPointGetLanguageLanguageEnum {
    Cs = "cs",
    En = "en",
    De = "de",
    Es = "es",
    Fr = "fr",
    Pl = "pl",
    Pt = "pt"
}
/**
 * An enumeration.
 */
export declare enum PointPointGetUnitsUnitsEnum {
    Auto = "auto",
    Metric = "metric",
    Us = "us",
    Uk = "uk",
    Ca = "ca"
}
export declare class PointPointGetRequest extends SpeakeasyBase {
    /**
     * Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
     */
    key?: string;
    /**
     * The language of text summaries and place names (variable names are never translated). Available languages are:
     *
     * @remarks
     *
     *    * ``en``: English
     *    * ``es``: Spanish
     *    * ``fr``: French
     *    * ``de``: German
     *    * ``pl``: Polish
     *    * ``pt``: Portuguese
     *    * ``cs``: Czech
     *
     */
    language?: PointPointGetLanguageLanguageEnum;
    /**
     * Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
     */
    lat?: string;
    /**
     * Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
     */
    lon?: string;
    /**
     * Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
     */
    placeId?: string;
    /**
     * Sections to be included in the response. You can specify more section by separating the values with a comma. The available values are:
     *
     * @remarks
     *
     * * ``current``: Current weather situation
     * * ``daily``: Forecasts for each whole day, without the daily parts
     * * ``daily-parts``: Forecasts for each whole day, morning, afternoon and evening
     *     * Important: forecast for the morning, afternoon and evening is available only for the first
     *       7 days in the forecast
     * * ``hourly``: Forecasts with hourly resolution
     * * ``minutely``: Precipitation forecast with 1 minute resolution
     * * ``alerts``: The weather alerts
     * * ``all``: All sections
     *
     */
    sections?: string;
    /**
     * Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.
     *
     * @remarks
     * The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.
     * Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.
     * The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
     *
     */
    timezone?: string;
    /**
     * Unit system to be used. The available values are:
     *
     * @remarks
     *
     * * `auto`: Select the system automatically, based on the forecast location.
     * * `metric`: Metric (SI) units (`°C`, `mm/h`, `m/s`, `cm`, `km`, `hPa`).
     * * `us`: Imperial units (`°F`, `in/h`, `mph`, `in`, `mi`, `Hg`).
     * * `uk`: Same as ``metric``, except that visibility is in `miles` and wind speeds are in `mph`.
     * * `ca`: Same as ``metric``, except that wind speeds are in `km/h` and pressure is in `kPa`.
     *
     */
    units?: PointPointGetUnitsUnitsEnum;
}
export declare class PointPointGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error in passed parameter.
     */
    generalRequestError?: shared.GeneralRequestError;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    pointPointData?: shared.PointPointData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
