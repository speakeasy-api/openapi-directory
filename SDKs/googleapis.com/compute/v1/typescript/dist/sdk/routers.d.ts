import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Routers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of routers.
     */
    computeRoutersAggregatedList(req: operations.ComputeRoutersAggregatedListRequest, security: operations.ComputeRoutersAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersAggregatedListResponse>;
    /**
     * Deletes the specified Router resource.
     */
    computeRoutersDelete(req: operations.ComputeRoutersDeleteRequest, security: operations.ComputeRoutersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersDeleteResponse>;
    /**
     * Returns the specified Router resource.
     */
    computeRoutersGet(req: operations.ComputeRoutersGetRequest, security: operations.ComputeRoutersGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersGetResponse>;
    /**
     * Retrieves runtime Nat mapping information of VM endpoints.
     */
    computeRoutersGetNatMappingInfo(req: operations.ComputeRoutersGetNatMappingInfoRequest, security: operations.ComputeRoutersGetNatMappingInfoSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersGetNatMappingInfoResponse>;
    /**
     * Retrieves runtime information of the specified router.
     */
    computeRoutersGetRouterStatus(req: operations.ComputeRoutersGetRouterStatusRequest, security: operations.ComputeRoutersGetRouterStatusSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersGetRouterStatusResponse>;
    /**
     * Creates a Router resource in the specified project and region using the data included in the request.
     */
    computeRoutersInsert(req: operations.ComputeRoutersInsertRequest, security: operations.ComputeRoutersInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersInsertResponse>;
    /**
     * Retrieves a list of Router resources available to the specified project.
     */
    computeRoutersList(req: operations.ComputeRoutersListRequest, security: operations.ComputeRoutersListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersListResponse>;
    /**
     * Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computeRoutersPatch(req: operations.ComputeRoutersPatchRequest, security: operations.ComputeRoutersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersPatchResponse>;
    /**
     * Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
     */
    computeRoutersPreview(req: operations.ComputeRoutersPreviewRequest, security: operations.ComputeRoutersPreviewSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersPreviewResponse>;
    /**
     * Updates the specified Router resource with the data included in the request. This method conforms to PUT semantics, which requests that the state of the target resource be created or replaced with the state defined by the representation enclosed in the request message payload.
     */
    computeRoutersUpdate(req: operations.ComputeRoutersUpdateRequest, security: operations.ComputeRoutersUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRoutersUpdateResponse>;
}
