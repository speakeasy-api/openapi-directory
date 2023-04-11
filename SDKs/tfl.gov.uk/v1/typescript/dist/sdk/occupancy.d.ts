import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Occupancy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the occupancy for a car park with a given id
     */
    occupancyGet(req: operations.OccupancyGetRequest, config?: AxiosRequestConfig): Promise<operations.OccupancyGetResponse>;
    /**
     * Gets the occupancy for all charge connectors
     */
    occupancyGetAllChargeConnectorStatus(config?: AxiosRequestConfig): Promise<operations.OccupancyGetAllChargeConnectorStatusResponse>;
    /**
     * Get the occupancy for bike points.
     */
    occupancyGetBikePointsOccupancies(req: operations.OccupancyGetBikePointsOccupanciesRequest, config?: AxiosRequestConfig): Promise<operations.OccupancyGetBikePointsOccupanciesResponse>;
    /**
     * Gets the occupancy for a charge connectors with a given id (sourceSystemPlaceId)
     */
    occupancyGetChargeConnectorStatus(req: operations.OccupancyGetChargeConnectorStatusRequest, config?: AxiosRequestConfig): Promise<operations.OccupancyGetChargeConnectorStatusResponse>;
    /**
     * Gets the occupancy for all car parks that have occupancy data
     */
    getOccupancyCarPark(config?: AxiosRequestConfig): Promise<operations.GetOccupancyCarParkResponse>;
}
