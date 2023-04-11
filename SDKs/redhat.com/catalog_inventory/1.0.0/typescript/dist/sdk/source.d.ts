import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Source {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Incremental Refresh an existing Source
     *
     * @remarks
     * Incremental Refresh a source object
     */
    incrementalRefreshSource(req: operations.IncrementalRefreshSourceRequest, config?: AxiosRequestConfig): Promise<operations.IncrementalRefreshSourceResponse>;
    /**
     * List ServiceInstances for Source
     *
     * @remarks
     * Returns an array of ServiceInstance objects
     */
    listSourceServiceInstances(req: operations.ListSourceServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceInstancesResponse>;
    /**
     * List ServiceInventories for Source
     *
     * @remarks
     * Returns an array of ServiceInventory objects
     */
    listSourceServiceInventories(req: operations.ListSourceServiceInventoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceInventoriesResponse>;
    /**
     * List ServiceOfferingNodes for Source
     *
     * @remarks
     * Returns an array of ServiceOfferingNode objects
     */
    listSourceServiceOfferingNodes(req: operations.ListSourceServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceOfferingNodesResponse>;
    /**
     * List ServiceOfferings for Source
     *
     * @remarks
     * Returns an array of ServiceOffering objects
     */
    listSourceServiceOfferings(req: operations.ListSourceServiceOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceOfferingsResponse>;
    /**
     * List ServicePlans for Source
     *
     * @remarks
     * Returns an array of ServicePlan objects
     */
    listSourceServicePlans(req: operations.ListSourceServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServicePlansResponse>;
    /**
     * List Tasks for Source
     *
     * @remarks
     * Returns an array of Task objects
     */
    listSourceTasks(req: operations.ListSourceTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceTasksResponse>;
    /**
     * List Sources
     *
     * @remarks
     * Returns an array of Source objects
     */
    listSources(req: operations.ListSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourcesResponse>;
    /**
     *  Refresh an existing Source
     *
     * @remarks
     * Refresh a source object
     */
    refreshSource(req: operations.RefreshSourceRequest, config?: AxiosRequestConfig): Promise<operations.RefreshSourceResponse>;
    /**
     * Show an existing Source
     *
     * @remarks
     * Returns a Source object
     */
    showSource(req: operations.ShowSourceRequest, config?: AxiosRequestConfig): Promise<operations.ShowSourceResponse>;
}
