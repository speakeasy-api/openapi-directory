import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceOffering {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Invokes computing of ServiceInventories tags for given ServiceOffering
     *
     * @remarks
     * Returns an array of inventories tags
     */
    appliedInventoriesTagsForServiceOffering(req: operations.AppliedInventoriesTagsForServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.AppliedInventoriesTagsForServiceOfferingResponse>;
    /**
     * List ServiceInstances for ServiceOffering
     *
     * @remarks
     * Returns an array of ServiceInstance objects
     */
    listServiceOfferingServiceInstances(req: operations.ListServiceOfferingServiceInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServiceInstancesResponse>;
    /**
     * List ServiceOfferingNodes for ServiceOffering
     *
     * @remarks
     * Returns an array of ServiceOfferingNode objects
     */
    listServiceOfferingServiceOfferingNodes(req: operations.ListServiceOfferingServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServiceOfferingNodesResponse>;
    /**
     * List ServicePlans for ServiceOffering
     *
     * @remarks
     * Returns an array of ServicePlan objects
     */
    listServiceOfferingServicePlans(req: operations.ListServiceOfferingServicePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingServicePlansResponse>;
    /**
     * List ServiceOfferings
     *
     * @remarks
     * Returns an array of ServiceOffering objects
     */
    listServiceOfferings(req: operations.ListServiceOfferingsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingsResponse>;
    /**
     * Order an existing ServiceOffering
     *
     * @remarks
     * Returns a Task id
     */
    orderServiceOffering(req: operations.OrderServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.OrderServiceOfferingResponse>;
    /**
     * Show an existing ServiceOffering
     *
     * @remarks
     * Returns a ServiceOffering object
     */
    showServiceOffering(req: operations.ShowServiceOfferingRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceOfferingResponse>;
}
