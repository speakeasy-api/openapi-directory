import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * #### Areas where drone operations may be restricted or prohibited:
 *
 * @remarks
 * * Lands administered by the National Park Service (prohibited at all times)
 * * Major League Baseball Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
 * * National Football League Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
 * * NCAA Division One Football Stadiums (prohibited within a 3 NM radius 1 hr before - 1 hr after game)
 * * NASCAR Sprint Cup, Indy Car, and Champ Series races (prohibited within a 3 NM radius 1 hr before - 1 hr after race)
 */
export declare class RestrictedPublicVenues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all restricted public venues located within given distance of location.
     *
     * @remarks
     * Retrieve venues existing within given distance from a point. Request body parameters are:
     * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
     * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
     * * distance:  distance in meters (max allowed value is 25000)
     */
    venByDistanceUsV1VenuesDistanceQueryPost(req: operations.VenByDistanceUsV1VenuesDistanceQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.VenByDistanceUsV1VenuesDistanceQueryPostResponse>;
    /**
     * Retrieve all restricted public venues located within given GeoJSON Polygon.
     *
     * @remarks
     * Retrieve all restricted public venues located within given area. Request body parameters are:
     * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
     */
    venByPolyUsV1VenuesPolygonQueryPost(req: operations.VenByPolyUsV1VenuesPolygonQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.VenByPolyUsV1VenuesPolygonQueryPostResponse>;
    /**
     * Retrieve all restricted public venues traversed by route.
     *
     * @remarks
     * Retrieve all restricted public venues intersected by route. Request body parameters are:
     * * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
     */
    venByRouteUsV1VenuesRouteQueryPost(req: operations.VenByRouteUsV1VenuesRouteQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.VenByRouteUsV1VenuesRouteQueryPostResponse>;
}
