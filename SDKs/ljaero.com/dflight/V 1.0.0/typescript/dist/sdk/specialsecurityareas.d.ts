import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * #### Locations where all UAS flight operations are prohibited unless prior FAA authorization has been obtained, and coordination with the controlling agency has taken place.
 *
 * @remarks
 * Through agreements with the Department of Defense and other U.S. security and intelligence agencies, the FAA published these restrictions as [FDC NOTAM 1/0488](https://tfr.faa.gov/save_pages/detail_1_0488.html) (and it's predecessors). Unlike other NOTAMs designated as [Temporary Flight Restrictions](https://dflight-api.ljaero.com/#/Flight%20Restrictions), these remain in effect 24 hours a day, 7 days a week, until further announcement.
 */
export declare class SpecialSecurityAreas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all special security areas located within given distance of location.
     *
     * @remarks
     * Retrieve special security areas existing within given distance from a point. Request body parameters are:
     * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
     * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
     * * distance:  distance in meters (max allowed value is 25000)
     */
    ssaByDistanceUsV1SsaDistanceQueryPost(req: operations.SsaByDistanceUsV1SsaDistanceQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.SsaByDistanceUsV1SsaDistanceQueryPostResponse>;
    /**
     * Retrieve all special security areas located within given GeoJSON Polygon.
     *
     * @remarks
     * Retrieve all special security areas located within given area. Request body parameters are:
     * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
     */
    ssaByPolyUsV1SsaPolygonQueryPost(req: operations.SsaByPolyUsV1SsaPolygonQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.SsaByPolyUsV1SsaPolygonQueryPostResponse>;
    /**
     * Retrieve all special security areas traversed by route.
     *
     * @remarks
     * Retrieve all special security areas intersected by route. Request body parameters are:
     * * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
     */
    ssaByRouteUsV1SsaRouteQueryPost(req: operations.SsaByRouteUsV1SsaRouteQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.SsaByRouteUsV1SsaRouteQueryPostResponse>;
}
