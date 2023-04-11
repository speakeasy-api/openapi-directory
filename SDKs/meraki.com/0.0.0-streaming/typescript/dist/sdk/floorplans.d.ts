import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FloorPlans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Upload a floor plan
     *
     * @remarks
     * Upload a floor plan
     */
    createNetworkFloorPlan(req: operations.CreateNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFloorPlanResponse>;
    /**
     * Destroy a floor plan
     *
     * @remarks
     * Destroy a floor plan
     */
    deleteNetworkFloorPlan(req: operations.DeleteNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkFloorPlanResponse>;
    /**
     * Find a floor plan by ID
     *
     * @remarks
     * Find a floor plan by ID
     */
    getNetworkFloorPlan(req: operations.GetNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFloorPlanResponse>;
    /**
     * List the floor plans that belong to your network
     *
     * @remarks
     * List the floor plans that belong to your network
     */
    getNetworkFloorPlans(req: operations.GetNetworkFloorPlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFloorPlansResponse>;
    /**
     * Update a floor plan's geolocation and other meta data
     *
     * @remarks
     * Update a floor plan's geolocation and other meta data
     */
    updateNetworkFloorPlan(req: operations.UpdateNetworkFloorPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFloorPlanResponse>;
}
