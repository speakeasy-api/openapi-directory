import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Directions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the directions, path, distance and travel time between a series of geographic points
     *
     * @remarks
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
     */
    getDirectionsOutputFormat(req: operations.GetDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectionsOutputFormatResponse>;
    /**
     * Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time.
     *
     * @remarks
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time
     */
    getOptimalDirectionsOutputFormat(req: operations.GetOptimalDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetOptimalDirectionsOutputFormatResponse>;
    /**
     * Get the directions, path, distance and travel time between a series of geographic points for a commercial vehicle
     *
     * @remarks
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points for a commercial vehicle
     */
    getTruckDirectionsOutputFormat(req: operations.GetTruckDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckDirectionsOutputFormatResponse>;
    /**
     * Get the directions, optimal path, distance and travel time between a start point and a series of end points which are reordered to minimize total distance or time for a commercial vehicle
     *
     * @remarks
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and a series of end points which are reordered to minimize distance/time for a commercial vehicle.
     */
    getTruckOptimalDirectionsOutputFormat(req: operations.GetTruckOptimalDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckOptimalDirectionsOutputFormatResponse>;
    /**
     * Get the directions, path, distance and travel time between a series of geographic points
     *
     * @remarks
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
     */
    postDirectionsOutputFormat(req: operations.PostDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostDirectionsOutputFormatResponse>;
    /**
     * Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
     *
     * @remarks
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
     */
    postOptimalDirectionsOutputFormat(req: operations.PostOptimalDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostOptimalDirectionsOutputFormatResponse>;
    /**
     * Get the directions, path, distance and travel time between a series of geographic points
     *
     * @remarks
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between given start and end points
     */
    postTruckDirectionsOutputFormat(req: operations.PostTruckDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckDirectionsOutputFormatResponse>;
    /**
     * Get the directions, optimal path, distance and travel time between a start point and one or more end points which are reordered to minimize total distance or time.
     *
     * @remarks
     * Represents the turn-by-turn directions, geometry, distance, and time of the shortest path or fastest path between a start point and one or more end points which are reordered to minimize distance or time.
     */
    postTruckOptimalDirectionsOutputFormat(req: operations.PostTruckOptimalDirectionsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckOptimalDirectionsOutputFormatResponse>;
}
