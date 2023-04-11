import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MapMapGetSecurity extends SpeakeasyBase {
    apiKeyHeader: string;
}
export declare class MapMapGetRequest extends SpeakeasyBase {
    /**
     * There are two ways to specify date and time for your map:
     *
     * @remarks
     *
     * 1. Datetime in `YYYY-MM-DDTHH:MM` format and `UTC` timezone, e.g. `2021-08-24T12:00`
     * 2. Offset from current time in `[+-]<minutes|hours|days>` format, e.g. `+10minutes`, `-2hours` or `+1days`
     *
     */
    datetime: string;
    /**
     * Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
     */
    key?: string;
    /**
     * Maximal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2.
     *
     * @remarks
     *
     */
    maxLat?: string;
    /**
     * Maximal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2
     *
     * @remarks
     *
     */
    maxLon?: string;
    /**
     * Minimal latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.2
     *
     * @remarks
     *
     */
    minLat?: string;
    /**
     * Minimal longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.2
     *
     * @remarks
     *
     */
    minLon?: string;
    /**
     * The X coordinate of Google Maps tile
     */
    tileX?: number;
    /**
     * The Y coordinate of Google Maps tile
     */
    tileY?: number;
    /**
     * The zoom level of Google Maps tile
     */
    tileZoom?: number;
    /**
     * Name of the variable for your map. Available values are:
     *
     * @remarks
     *
     * * `temperature`: Temperature 2 metres above ground
     * * `feels_like_temperature`: Feels like temperature
     * * `clouds`: Percentage of sky covered by clouds
     * * `precipitation`: Total precipitation amount accumulated since last hour
     * * `wind_speed`: Wind speed 10 metres above the ground
     * * `wind_gust`: Wind gust speed
     * * `pressure`: Atmospheric pressure at mean sea level
     * * `humidity`: Relative humidity
     * * `wave_height`: Wave height
     * * `wave_period`: Wave period
     * * `sea_temperature`: Sea temperature (available only for +-24 hours)
     * * `air_quality`: Air quality index
     * * `ozone_surface`: Ozone at surface level
     * * `ozone_total`: Total column ozone
     * * `no2`: Nitrogen dioxide at surface level
     * * `pm2.5`: Particulate matter d < 2.5 µm (PM2.5)
     *
     */
    variable: string;
}
export declare class MapMapGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    mapMapGet200ImagePngString?: string;
}
