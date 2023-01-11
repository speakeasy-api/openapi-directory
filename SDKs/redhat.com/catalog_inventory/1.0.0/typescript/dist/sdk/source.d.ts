import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Source {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * incrementalRefreshSource - Incremental Refresh an existing Source
     *
     * Incremental Refresh a source object
    **/
    incrementalRefreshSource(req: operations.IncrementalRefreshSourceRequest, config?: AxiosRequestConfig): Promise<operations.IncrementalRefreshSourceResponse>;
    /**
     * listSourceServiceInstances - List ServiceInstances for Source
     *
     * Returns an array of ServiceInstance objects
    **/
    listSourceServiceInstances(req: operations.ListSourceServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceInstancesResponse>;
    /**
     * listSourceServiceInventories - List ServiceInventories for Source
     *
     * Returns an array of ServiceInventory objects
    **/
    listSourceServiceInventories(req: operations.ListSourceServiceInventoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceInventoriesResponse>;
    /**
     * listSourceServiceOfferingNodes - List ServiceOfferingNodes for Source
     *
     * Returns an array of ServiceOfferingNode objects
    **/
    listSourceServiceOfferingNodes(req: operations.ListSourceServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceOfferingNodesResponse>;
    /**
     * listSourceServiceOfferings - List ServiceOfferings for Source
     *
     * Returns an array of ServiceOffering objects
    **/
    listSourceServiceOfferings(req: operations.ListSourceServiceOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServiceOfferingsResponse>;
    /**
     * listSourceServicePlans - List ServicePlans for Source
     *
     * Returns an array of ServicePlan objects
    **/
    listSourceServicePlans(req: operations.ListSourceServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceServicePlansResponse>;
    /**
     * listSourceTasks - List Tasks for Source
     *
     * Returns an array of Task objects
    **/
    listSourceTasks(req: operations.ListSourceTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListSourceTasksResponse>;
    /**
     * listSources - List Sources
     *
     * Returns an array of Source objects
    **/
    listSources(req: operations.ListSourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListSourcesResponse>;
    /**
     * refreshSource -  Refresh an existing Source
     *
     * Refresh a source object
    **/
    refreshSource(req: operations.RefreshSourceRequest, config?: AxiosRequestConfig): Promise<operations.RefreshSourceResponse>;
    /**
     * showSource - Show an existing Source
     *
     * Returns a Source object
    **/
    showSource(req: operations.ShowSourceRequest, config?: AxiosRequestConfig): Promise<operations.ShowSourceResponse>;
}
