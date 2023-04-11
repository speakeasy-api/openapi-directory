import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * #### Hourly forecast values for the following flight-impacting weather elements:
 *
 * @remarks
 * * Cloud Ceiling (CIG)
 * * Dewpoint Temperature (DEWPT)
 * * Cloud Cover (SKY)
 * * Air Temperature (TEMP)
 * * Visibility (VIS)
 * * Wind Direction (WINDDIR)
 * * Wind Speed (WINDSPEED)
 * * Wind Gust Speed (WINDGUST)
 */
export declare class Weather {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve forecast values within given distance of location for all requested weather elements and time periods.
     *
     * @remarks
     * Retrieve forecast values for selected weather elements and time period. Request body parameters are:
     * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
     * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
     * * distance:  distance in meters (max allowed value is 25000)
     * * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
     * * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.
     *
     *
     * The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
     * properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
     * * CIG: meters AGL
     * * DEWPT: degrees Celsius
     * * SKY: % cloud cover
     * * TEMP: degrees Celsius
     * * VIS: meters
     * * WINDDIR: degrees true
     * * WINDGUST: meters/sec
     * * WINDSPEED: meters/sec
     */
    wxByDistanceUsV1WxForecastDistanceQueryPost(req: operations.WxByDistanceUsV1WxForecastDistanceQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.WxByDistanceUsV1WxForecastDistanceQueryPostResponse>;
    /**
     * Retrieve forecast values within given GeoJSON polygon for all requested weather elements and time periods.
     *
     * @remarks
     * Retrieve forecast values located within given area for requested weather elements and time period. Request body parameters are:
     * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
     * * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
     * * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.
     *
     *
     * The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
     * properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
     * * CIG: meters AGL
     * * DEWPT: degrees Celsius
     * * SKY: % cloud cover
     * * TEMP: degrees Celsius
     * * VIS: meters
     * * WINDDIR: degrees true
     * * WINDGUST: meters/sec
     * * WINDSPEED: meters/sec
     */
    wxByPolyUsV1WxForecastPolygonQueryPost(req: operations.WxByPolyUsV1WxForecastPolygonQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.WxByPolyUsV1WxForecastPolygonQueryPostResponse>;
    /**
     * Retrieve forecast values along a route for all requested weather elements and time periods.
     *
     * @remarks
     * Retrieve forecast values along route for requested weather elements and time period. Request body parameters are:
     * * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
     * * wxtypes:  list of one or more weather forecast elements you wish to retrieve. Allowed values are "CIG", "DEWPT", "SKY", "TEMP", "VIS", "WINDDIR", "WINDGUST", "WINDSPEED".
     * * hours:  number of hourly forecasts to return (1-24). For current hour only you should enter value of 1. To also retrieve values for each of the next n hours, enter n.
     *
     *
     * The response will consist of a GeoJSON FeatureCollection with one Feature for each forecast location found within requested area,
     * properties of which will include an ordered list of forecast values for each requested weather element, for each requested hour. Units for each element are as follows:
     * * CIG: meters AGL
     * * DEWPT: degrees Celsius
     * * SKY: % cloud cover
     * * TEMP: degrees Celsius
     * * VIS: meters
     * * WINDDIR: degrees true
     * * WINDGUST: meters/sec
     * * WINDSPEED: meters/sec
     */
    wxByRouteUsV1WxForecastRouteQueryPost(req: operations.WxByRouteUsV1WxForecastRouteQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.WxByRouteUsV1WxForecastRouteQueryPostResponse>;
}
