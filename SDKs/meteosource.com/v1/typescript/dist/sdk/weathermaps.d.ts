import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WeatherMaps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns PNG weather map for given area and variable
     *
     * @remarks
     * ## PNG weather forecast maps for given area and variable
     *
     * ### Area specification
     * There are two ways to specify geographical area you need for your map:
     * 1. Specify `X` and `Y` coordinates and zoom level `Z` of desired tile in <a href="https://www.maptiler.com/google-maps-coordinates-tile-bounds-projection/" rel="nofollow" target="_blank">Google Maps Tile notation</a>.
     * 2. Specify latitude and longitude bounds of the area you want to cover.
     *
     * ### Notes
     * * The resulting PNG maps are **always** in <a href="https://epsg.io/3857" rel="nofollow" target="_blank">Google Mercator projection (EPSG:3857)</a>.
     * * As Meteosource only covers areas between latitudes 80° and -80°, you can only request maps within these bounds, when specifying the latitude and longitude boundaries. When specifying the area using Google Maps Tile notation, the regions outside our supported latitudes will be fully transparent.
     * * The finest resolution is not available for maps covering very large regions. The resulting map will be automatically downscaled in this case, to guarantee high-speed responses.
     * * Weather maps are only supported for forecasts, not for archive data.
     *
     */
    mapMapGet(req: operations.MapMapGetRequest, security: operations.MapMapGetSecurity, config?: AxiosRequestConfig): Promise<operations.MapMapGetResponse>;
}
