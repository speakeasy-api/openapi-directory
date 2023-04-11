import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * #### Temporary Flight Restrictions (TFRs) define areas restricting air operations (including drone operations) due to hazardous conditions, special events, or other safety/security reasons.
 *
 * @remarks
 * All published/active TFRs in specified area will be included in the response. Check the startDateTime and endDateTime properties to determine whether or not the restriction is applicable during your planned time of operation. In case of a TFR in your area of intended operation, you might still be able to fly by obtaining a via waiver through the [Special Governmental Interest (SGI) process](https://www.faa.gov/uas/advanced_operations/emergency_situations).
 */
export declare class FlightRestrictions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve flight restrictions applicable within given distance of location.
     *
     * @remarks
     * Retrieve Flight Restrictions applicable within given distance of a point. Request body parameters are:
     * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
     * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
     * * distance:  distance in meters (max allowed value is 25000)
     */
    tfrByDistanceUsV1RestrictionsDistanceQueryPost(req: operations.TfrByDistanceUsV1RestrictionsDistanceQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.TfrByDistanceUsV1RestrictionsDistanceQueryPostResponse>;
    /**
     * Retrieve flight restrictions applicable within given area.
     *
     * @remarks
     * Retrieve Flight Restrictions located within given area. Request body parameters are:
     * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
     */
    tfrByPolyUsV1RestrictionsPolygonQueryPost(req: operations.TfrByPolyUsV1RestrictionsPolygonQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.TfrByPolyUsV1RestrictionsPolygonQueryPostResponse>;
    /**
     * Retrieve flight restrictions applicable along route.
     *
     * @remarks
     * Retrieve Flight Restrictions applicable along your route. Request body parameters are:
     * * route:  [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
     */
    tfrByRouteUsV1RestrictionsRouteQueryPost(req: operations.TfrByRouteUsV1RestrictionsRouteQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.TfrByRouteUsV1RestrictionsRouteQueryPostResponse>;
}
