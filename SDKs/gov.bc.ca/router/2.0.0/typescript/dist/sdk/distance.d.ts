import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Distance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get distance and travel time between two geographic points
     *
     * @remarks
     * Represents the distance and time of the shortest or fastest path between given start and end points.
     */
    getDistanceOutputFormat(req: operations.GetDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetDistanceOutputFormatResponse>;
    /**
     * Get distance and travel time between each pair of geographic points
     *
     * @remarks
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
     */
    getDistanceBetweenPairsOutputFormat(req: operations.GetDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetDistanceBetweenPairsOutputFormatResponse>;
    /**
     * Get distance and travel time between two geographic points for a commercial vehicle
     *
     * @remarks
     * Represents the distance and time of the shortest or fastest path between given start and end points.
     */
    getTruckDistanceOutputFormat(req: operations.GetTruckDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckDistanceOutputFormatResponse>;
    /**
     * Get distance and travel time between each pair of geographic points for a commercial vehicle
     *
     * @remarks
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints for a commercial vehicle. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
     */
    getTruckDistanceBetweenPairsOutputFormat(req: operations.GetTruckDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetTruckDistanceBetweenPairsOutputFormatResponse>;
    /**
     * Get distance and travel time between two geographic points
     *
     * @remarks
     * Represents the distance and time of the shortest or fastest path between given start and end points.
     */
    postDistanceOutputFormat(req: operations.PostDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostDistanceOutputFormatResponse>;
    /**
     * Get distance and travel time between each pair of geographic points
     *
     * @remarks
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
     */
    postDistanceBetweenPairsOutputFormat(req: operations.PostDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostDistanceBetweenPairsOutputFormatResponse>;
    /**
     * Get distance and travel time between two geographic points
     *
     * @remarks
     * Represents the distance and time of the shortest or fastest path between given start and end points.
     */
    postTruckDistanceOutputFormat(req: operations.PostTruckDistanceOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckDistanceOutputFormatResponse>;
    /**
     * Get distance and travel time between each pair of geographic points
     *
     * @remarks
     * Represents the distance and time of the shortest or fastest paths between all pairs of fromPoints and toPoints. The number of fromPoints times the number of toPoints should not exceed 100 or the request will time out.
     */
    postTruckDistanceBetweenPairsOutputFormat(req: operations.PostTruckDistanceBetweenPairsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.PostTruckDistanceBetweenPairsOutputFormatResponse>;
}
