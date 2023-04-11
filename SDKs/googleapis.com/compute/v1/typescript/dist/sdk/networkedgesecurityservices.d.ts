import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NetworkEdgeSecurityServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.
     */
    computeNetworkEdgeSecurityServicesAggregatedList(req: operations.ComputeNetworkEdgeSecurityServicesAggregatedListRequest, security: operations.ComputeNetworkEdgeSecurityServicesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEdgeSecurityServicesAggregatedListResponse>;
    /**
     * Deletes the specified service.
     */
    computeNetworkEdgeSecurityServicesDelete(req: operations.ComputeNetworkEdgeSecurityServicesDeleteRequest, security: operations.ComputeNetworkEdgeSecurityServicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEdgeSecurityServicesDeleteResponse>;
    /**
     * Gets a specified NetworkEdgeSecurityService.
     */
    computeNetworkEdgeSecurityServicesGet(req: operations.ComputeNetworkEdgeSecurityServicesGetRequest, security: operations.ComputeNetworkEdgeSecurityServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEdgeSecurityServicesGetResponse>;
    /**
     * Creates a new service in the specified project using the data included in the request.
     */
    computeNetworkEdgeSecurityServicesInsert(req: operations.ComputeNetworkEdgeSecurityServicesInsertRequest, security: operations.ComputeNetworkEdgeSecurityServicesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEdgeSecurityServicesInsertResponse>;
    /**
     * Patches the specified policy with the data included in the request.
     */
    computeNetworkEdgeSecurityServicesPatch(req: operations.ComputeNetworkEdgeSecurityServicesPatchRequest, security: operations.ComputeNetworkEdgeSecurityServicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkEdgeSecurityServicesPatchResponse>;
}
