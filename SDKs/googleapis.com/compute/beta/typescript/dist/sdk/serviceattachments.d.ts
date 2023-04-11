import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceAttachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the list of all ServiceAttachment resources, regional and global, available to the specified project.
     */
    computeServiceAttachmentsAggregatedList(req: operations.ComputeServiceAttachmentsAggregatedListRequest, security: operations.ComputeServiceAttachmentsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsAggregatedListResponse>;
    /**
     * Deletes the specified ServiceAttachment in the given scope
     */
    computeServiceAttachmentsDelete(req: operations.ComputeServiceAttachmentsDeleteRequest, security: operations.ComputeServiceAttachmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsDeleteResponse>;
    /**
     * Returns the specified ServiceAttachment resource in the given scope.
     */
    computeServiceAttachmentsGet(req: operations.ComputeServiceAttachmentsGetRequest, security: operations.ComputeServiceAttachmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeServiceAttachmentsGetIamPolicy(req: operations.ComputeServiceAttachmentsGetIamPolicyRequest, security: operations.ComputeServiceAttachmentsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsGetIamPolicyResponse>;
    /**
     * Creates a ServiceAttachment in the specified project in the given scope using the parameters that are included in the request.
     */
    computeServiceAttachmentsInsert(req: operations.ComputeServiceAttachmentsInsertRequest, security: operations.ComputeServiceAttachmentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsInsertResponse>;
    /**
     * Lists the ServiceAttachments for a project in the given scope.
     */
    computeServiceAttachmentsList(req: operations.ComputeServiceAttachmentsListRequest, security: operations.ComputeServiceAttachmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsListResponse>;
    /**
     * Patches the specified ServiceAttachment resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computeServiceAttachmentsPatch(req: operations.ComputeServiceAttachmentsPatchRequest, security: operations.ComputeServiceAttachmentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeServiceAttachmentsSetIamPolicy(req: operations.ComputeServiceAttachmentsSetIamPolicyRequest, security: operations.ComputeServiceAttachmentsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeServiceAttachmentsTestIamPermissions(req: operations.ComputeServiceAttachmentsTestIamPermissionsRequest, security: operations.ComputeServiceAttachmentsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeServiceAttachmentsTestIamPermissionsResponse>;
}
