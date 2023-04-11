import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * #### All known structures whose presence might interfere with airborne activity, as defined in [14 CFR Part 77.9](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-E/part-77#77.9).
 *
 * @remarks
 * This information is updated daily and includes the following details:
 * * Location
 * * Type
 * * Number of separate structures in case of a group
 * * Height (in ft. AGL)
 * * Lighting and other markings
 */
export declare class SurfaceObstacles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve obstacles within given distance of location.
     *
     * @remarks
     * Retrieve obstacles within given distance of a point. Request body parameters are:
     * * latitude:  WGS84 latitude coordinate of your selected point, in decimal degrees
     * * longitude:  WGS84 longitude coordinate of your selected point, in decimal degrees
     * * distance:  distance in meters (max allowed value is 25000)
     */
    obstaclesByDistanceUsV1ObstaclesDistanceQueryPost(req: operations.ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.ObstaclesByDistanceUsV1ObstaclesDistanceQueryPostResponse>;
    /**
     * Retrieve obstacles located within given area.
     *
     * @remarks
     * Retrieve obstacles located within given area. Request body parameters are:
     * * poly:  [GeoJSON Polygon](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the area. Max allowed area is 1000 km^2.
     */
    obstaclesByPolyUsV1ObstaclesPolygonQueryPost(req: operations.ObstaclesByPolyUsV1ObstaclesPolygonQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.ObstaclesByPolyUsV1ObstaclesPolygonQueryPostResponse>;
    /**
     * Retrieve obstacles found along a route.
     *
     * @remarks
     * Retrieve obstacles found along a route. Request body parameters are:
     * * route: [GeoJSON Linestring](https://www.rfc-editor.org/rfc/rfc7946.html#appendix-A) defining the route. Max allowed length is 50 km.
     */
    obstaclesByRouteUsV1ObstaclesRouteQueryPost(req: operations.ObstaclesByRouteUsV1ObstaclesRouteQueryPostRequest, config?: AxiosRequestConfig): Promise<operations.ObstaclesByRouteUsV1ObstaclesRouteQueryPostResponse>;
}
