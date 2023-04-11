import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NetworkAttachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all NetworkAttachment resources, regional and global, available to the specified project.
     */
    computeNetworkAttachmentsAggregatedList(req: operations.ComputeNetworkAttachmentsAggregatedListRequest, security: operations.ComputeNetworkAttachmentsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkAttachmentsAggregatedListResponse>;
    /**
     * Deletes the specified NetworkAttachment in the given scope
     */
    computeNetworkAttachmentsDelete(req: operations.ComputeNetworkAttachmentsDeleteRequest, security: operations.ComputeNetworkAttachmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkAttachmentsDeleteResponse>;
    /**
     * Returns the specified NetworkAttachment resource in the given scope.
     */
    computeNetworkAttachmentsGet(req: operations.ComputeNetworkAttachmentsGetRequest, security: operations.ComputeNetworkAttachmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkAttachmentsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeNetworkAttachmentsGetIamPolicy(req: operations.ComputeNetworkAttachmentsGetIamPolicyRequest, security: operations.ComputeNetworkAttachmentsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkAttachmentsGetIamPolicyResponse>;
    /**
     * Creates a NetworkAttachment in the specified project in the given scope using the parameters that are included in the request.
     */
    computeNetworkAttachmentsInsert(req: operations.ComputeNetworkAttachmentsInsertRequest, security: operations.ComputeNetworkAttachmentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkAttachmentsInsertResponse>;
    /**
     * Lists the NetworkAttachments for a project in the given scope.
     */
    computeNetworkAttachmentsList(req: operations.ComputeNetworkAttachmentsListRequest, security: operations.ComputeNetworkAttachmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkAttachmentsListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeNetworkAttachmentsSetIamPolicy(req: operations.ComputeNetworkAttachmentsSetIamPolicyRequest, security: operations.ComputeNetworkAttachmentsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkAttachmentsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeNetworkAttachmentsTestIamPermissions(req: operations.ComputeNetworkAttachmentsTestIamPermissionsRequest, security: operations.ComputeNetworkAttachmentsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworkAttachmentsTestIamPermissionsResponse>;
}
