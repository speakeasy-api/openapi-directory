import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * #### Center points and contact information for all US landing facilities, including those with no associated controlled airspace:
 *
 * @remarks
 * * Public and private airports
 * * Public and private balloonports
 * * Public and private gliderports
 * * Public and private heliports
 * * Public and private seaplane bases
 * * Public and private ultralight bases
 */
export declare class Aerodromes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve aerodromes within given distance of location.
     *
     * @remarks
     * Retrieve aerodromes within given distance of a point. Request body parameters are:
     * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
     * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
     * * distance:  distance in meters (max allowed value is 25000)
     *
     * Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
     * Aerodrome found. All Features will include properties for the facility name, ident,
     * type, and operational status.
     */
    aerodromesByDistanceUsV1AerodromesDistanceQueryPost(req: operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.AerodromesByDistanceUsV1AerodromesDistanceQueryPostResponse>;
    /**
     * Retrieve aerodromes located within given area.
     *
     * @remarks
     * Retrieve aerodromes located within given area. Request body parameters are:
     * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
     *
     * Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
     * Aerodrome found. All Features will include properties for the facility name, ident,
     * type, and operational status.
     */
    aerodromesByPolyUsV1AerodromesPolygonQueryPost(req: operations.AerodromesByPolyUsV1AerodromesPolygonQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.AerodromesByPolyUsV1AerodromesPolygonQueryPostResponse>;
    /**
     * Retrieve aerodromes found along a route.
     *
     * @remarks
     * Retrieve aerodromes found along a route. Request body parameters are:
     * * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
     *
     * Successful requests return a GeoJSON FeatureCollection, with a separate Feature for each
     * Aerodrome found. All Features will include properties for the facility name, ident,
     * type, and operational status.
     */
    aerodromesByRouteUsV1AerodromesRouteQueryPost(req: operations.AerodromesByRouteUsV1AerodromesRouteQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.AerodromesByRouteUsV1AerodromesRouteQueryPostResponse>;
}
