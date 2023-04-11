import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Road {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a list of disrupted streets. If no date filters are provided, current disruptions are returned.
     */
    roadDisruptedStreets(req: operations.RoadDisruptedStreetsRequest, config?: AxiosRequestConfig): Promise<operations.RoadDisruptedStreetsResponse>;
    /**
     * Get active disruptions, filtered by road ids
     */
    roadDisruption(req: operations.RoadDisruptionRequest, config?: AxiosRequestConfig): Promise<operations.RoadDisruptionResponse>;
    /**
     * Gets a list of active disruptions filtered by disruption Ids.
     */
    roadDisruptionById(req: operations.RoadDisruptionByIdRequest, config?: AxiosRequestConfig): Promise<operations.RoadDisruptionByIdResponse>;
    /**
     * Gets all roads managed by TfL
     */
    roadGet(config?: AxiosRequestConfig): Promise<operations.RoadGetResponse>;
    /**
     * Gets a list of valid RoadDisruption categories
     */
    roadMetaCategories(config?: AxiosRequestConfig): Promise<operations.RoadMetaCategoriesResponse>;
    /**
     * Gets a list of valid RoadDisruption severity codes
     */
    roadMetaSeverities(config?: AxiosRequestConfig): Promise<operations.RoadMetaSeveritiesResponse>;
    /**
     * Gets the specified roads with the status aggregated over the date range specified, or now until the end of today if no dates are passed.
     */
    roadStatus(req: operations.RoadStatusRequest, config?: AxiosRequestConfig): Promise<operations.RoadStatusResponse>;
    /**
     * Gets the road with the specified id (e.g. A1)
     */
    getRoadIds(req: operations.GetRoadIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetRoadIdsResponse>;
}
