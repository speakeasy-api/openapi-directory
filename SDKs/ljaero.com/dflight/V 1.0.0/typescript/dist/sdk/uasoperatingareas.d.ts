import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * #### Areas where drone activity is scheduled to take place.
 *
 * @remarks
 * UAS Operating Areas (UOAs) are published via [NOTAM](https://www.faa.gov/regulations_policies/orders_notices/index.cfm/go/document.information/documentID/1035053) to alert airspace users of unmanned aircraft activity in a given area and at a given time (singular or recurring).
 */
export declare class UASOperatingAreas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve UAS Operating Areas (UOAs) found within given distance of location.
     *
     * @remarks
     * Retrieve UAS Operating Areas (UOAs) found within given distance of a point. Request body parameters are:
     * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
     * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
     * * distance:  distance in meters (max allowed value is 25000)
     */
    uoaByDistanceUsV1UoaDistanceQueryPost(req: operations.UoaByDistanceUsV1UoaDistanceQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.UoaByDistanceUsV1UoaDistanceQueryPostResponse>;
    /**
     * Retrieve UAS Operating Areas (UOAs) found within given area.
     *
     * @remarks
     * Retrieve UAS Operating Areas (UOAs) found within given area. Request body parameters are:
     * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
     */
    uoaByPolyUsV1UoaPolygonQueryPost(req: operations.UoaByPolyUsV1UoaPolygonQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.UoaByPolyUsV1UoaPolygonQueryPostResponse>;
    /**
     * Retrieve UAS Operating Areas (UOAs) found along route.
     *
     * @remarks
     * Retrieve UAS Operating Areas (UOAs) found along your route. Request body parameters are:
     * * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
     */
    uoaByRouteUsV1UoaRouteQueryPost(req: operations.UoaByRouteUsV1UoaRouteQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.UoaByRouteUsV1UoaRouteQueryPostResponse>;
}
