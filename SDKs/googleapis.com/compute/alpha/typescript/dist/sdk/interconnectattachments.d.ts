import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InterconnectAttachments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of interconnect attachments.
     */
    computeInterconnectAttachmentsAggregatedList(req: operations.ComputeInterconnectAttachmentsAggregatedListRequest, security: operations.ComputeInterconnectAttachmentsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsAggregatedListResponse>;
    /**
     * Deletes the specified interconnect attachment.
     */
    computeInterconnectAttachmentsDelete(req: operations.ComputeInterconnectAttachmentsDeleteRequest, security: operations.ComputeInterconnectAttachmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsDeleteResponse>;
    /**
     * Returns the specified interconnect attachment.
     */
    computeInterconnectAttachmentsGet(req: operations.ComputeInterconnectAttachmentsGetRequest, security: operations.ComputeInterconnectAttachmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeInterconnectAttachmentsGetIamPolicy(req: operations.ComputeInterconnectAttachmentsGetIamPolicyRequest, security: operations.ComputeInterconnectAttachmentsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsGetIamPolicyResponse>;
    /**
     * Creates an InterconnectAttachment in the specified project using the data included in the request.
     */
    computeInterconnectAttachmentsInsert(req: operations.ComputeInterconnectAttachmentsInsertRequest, security: operations.ComputeInterconnectAttachmentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsInsertResponse>;
    /**
     * Retrieves the list of interconnect attachments contained within the specified region.
     */
    computeInterconnectAttachmentsList(req: operations.ComputeInterconnectAttachmentsListRequest, security: operations.ComputeInterconnectAttachmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsListResponse>;
    /**
     * Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeInterconnectAttachmentsPatch(req: operations.ComputeInterconnectAttachmentsPatchRequest, security: operations.ComputeInterconnectAttachmentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeInterconnectAttachmentsSetIamPolicy(req: operations.ComputeInterconnectAttachmentsSetIamPolicyRequest, security: operations.ComputeInterconnectAttachmentsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsSetIamPolicyResponse>;
    /**
     * Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.
     */
    computeInterconnectAttachmentsSetLabels(req: operations.ComputeInterconnectAttachmentsSetLabelsRequest, security: operations.ComputeInterconnectAttachmentsSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeInterconnectAttachmentsTestIamPermissions(req: operations.ComputeInterconnectAttachmentsTestIamPermissionsRequest, security: operations.ComputeInterconnectAttachmentsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectAttachmentsTestIamPermissionsResponse>;
}
