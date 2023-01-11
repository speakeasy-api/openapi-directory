import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceOffering {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * appliedInventoriesTagsForServiceOffering - Invokes computing of ServiceInventories tags for given ServiceOffering
     *
     * Returns an array of inventories tags
    **/
    appliedInventoriesTagsForServiceOffering(req: operations.AppliedInventoriesTagsForServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.AppliedInventoriesTagsForServiceOfferingResponse>;
    /**
     * listServiceOfferingServiceInstances - List ServiceInstances for ServiceOffering
     *
     * Returns an array of ServiceInstance objects
    **/
    listServiceOfferingServiceInstances(req: operations.ListServiceOfferingServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServiceInstancesResponse>;
    /**
     * listServiceOfferingServiceOfferingNodes - List ServiceOfferingNodes for ServiceOffering
     *
     * Returns an array of ServiceOfferingNode objects
    **/
    listServiceOfferingServiceOfferingNodes(req: operations.ListServiceOfferingServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServiceOfferingNodesResponse>;
    /**
     * listServiceOfferingServicePlans - List ServicePlans for ServiceOffering
     *
     * Returns an array of ServicePlan objects
    **/
    listServiceOfferingServicePlans(req: operations.ListServiceOfferingServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServicePlansResponse>;
    /**
     * listServiceOfferings - List ServiceOfferings
     *
     * Returns an array of ServiceOffering objects
    **/
    listServiceOfferings(req: operations.ListServiceOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingsResponse>;
    /**
     * orderServiceOffering - Order an existing ServiceOffering
     *
     * Returns a Task id
    **/
    orderServiceOffering(req: operations.OrderServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.OrderServiceOfferingResponse>;
    /**
     * showServiceOffering - Show an existing ServiceOffering
     *
     * Returns a ServiceOffering object
    **/
    showServiceOffering(req: operations.ShowServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceOfferingResponse>;
}
