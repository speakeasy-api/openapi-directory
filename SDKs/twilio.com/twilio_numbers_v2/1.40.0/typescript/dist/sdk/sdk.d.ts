import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://numbers.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Create a new Bundle.
     */
    createBundle(req: operations.CreateBundleCreateBundleRequest, security: operations.CreateBundleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateBundleResponse>;
    /**
     * Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
     */
    createBundleCopy(req: operations.CreateBundleCopyRequest, security: operations.CreateBundleCopySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateBundleCopyResponse>;
    /**
     * Create a new End User.
     */
    createEndUser(req: operations.CreateEndUserCreateEndUserRequest, security: operations.CreateEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateEndUserResponse>;
    /**
     * Creates an evaluation for a bundle
     */
    createEvaluation(req: operations.CreateEvaluationRequest, security: operations.CreateEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateEvaluationResponse>;
    /**
     * Create a new Assigned Item.
     */
    createItemAssignment(req: operations.CreateItemAssignmentRequest, security: operations.CreateItemAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateItemAssignmentResponse>;
    /**
     * Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
     */
    createReplaceItems(req: operations.CreateReplaceItemsRequest, security: operations.CreateReplaceItemsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateReplaceItemsResponse>;
    /**
     * Create a new Supporting Document.
     */
    createSupportingDocument(req: operations.CreateSupportingDocumentCreateSupportingDocumentRequest, security: operations.CreateSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSupportingDocumentResponse>;
    /**
     * Delete a specific Bundle.
     */
    deleteBundle(req: operations.DeleteBundleRequest, security: operations.DeleteBundleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteBundleResponse>;
    /**
     * Delete a specific End User.
     */
    deleteEndUser(req: operations.DeleteEndUserRequest, security: operations.DeleteEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteEndUserResponse>;
    /**
     * Remove an Assignment Item Instance.
     */
    deleteItemAssignment(req: operations.DeleteItemAssignmentRequest, security: operations.DeleteItemAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteItemAssignmentResponse>;
    /**
     * Delete a specific Supporting Document.
     */
    deleteSupportingDocument(req: operations.DeleteSupportingDocumentRequest, security: operations.DeleteSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSupportingDocumentResponse>;
    /**
     * Fetch a specific Bundle instance.
     */
    fetchBundle(req: operations.FetchBundleRequest, security: operations.FetchBundleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchBundleResponse>;
    /**
     * Fetch specific End User Instance.
     */
    fetchEndUser(req: operations.FetchEndUserRequest, security: operations.FetchEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEndUserResponse>;
    /**
     * Fetch a specific End-User Type Instance.
     */
    fetchEndUserType(req: operations.FetchEndUserTypeRequest, security: operations.FetchEndUserTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEndUserTypeResponse>;
    /**
     * Fetch specific Evaluation Instance.
     */
    fetchEvaluation(req: operations.FetchEvaluationRequest, security: operations.FetchEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEvaluationResponse>;
    /**
     * Fetch specific Assigned Item Instance.
     */
    fetchItemAssignment(req: operations.FetchItemAssignmentRequest, security: operations.FetchItemAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchItemAssignmentResponse>;
    /**
     * Fetch specific Regulation Instance.
     */
    fetchRegulation(req: operations.FetchRegulationRequest, security: operations.FetchRegulationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRegulationResponse>;
    /**
     * Fetch specific Supporting Document Instance.
     */
    fetchSupportingDocument(req: operations.FetchSupportingDocumentRequest, security: operations.FetchSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSupportingDocumentResponse>;
    /**
     * Fetch a specific Supporting Document Type Instance.
     */
    fetchSupportingDocumentType(req: operations.FetchSupportingDocumentTypeRequest, security: operations.FetchSupportingDocumentTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSupportingDocumentTypeResponse>;
    /**
     * Retrieve a list of all Bundles for an account.
     */
    listBundle(req: operations.ListBundleRequest, security: operations.ListBundleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBundleResponse>;
    /**
     * Retrieve a list of all Bundles Copies for a Bundle.
     */
    listBundleCopy(req: operations.ListBundleCopyRequest, security: operations.ListBundleCopySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListBundleCopyResponse>;
    /**
     * Retrieve a list of all End User for an account.
     */
    listEndUser(req: operations.ListEndUserRequest, security: operations.ListEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEndUserResponse>;
    /**
     * Retrieve a list of all End-User Types.
     */
    listEndUserType(req: operations.ListEndUserTypeRequest, security: operations.ListEndUserTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEndUserTypeResponse>;
    /**
     * Retrieve a list of Evaluations associated to the Bundle resource.
     */
    listEvaluation(req: operations.ListEvaluationRequest, security: operations.ListEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEvaluationResponse>;
    /**
     * Retrieve a list of all Assigned Items for an account.
     */
    listItemAssignment(req: operations.ListItemAssignmentRequest, security: operations.ListItemAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListItemAssignmentResponse>;
    /**
     * Retrieve a list of all Regulations.
     */
    listRegulation(req: operations.ListRegulationRequest, security: operations.ListRegulationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRegulationResponse>;
    /**
     * Retrieve a list of all Supporting Document for an account.
     */
    listSupportingDocument(req: operations.ListSupportingDocumentRequest, security: operations.ListSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSupportingDocumentResponse>;
    /**
     * Retrieve a list of all Supporting Document Types.
     */
    listSupportingDocumentType(req: operations.ListSupportingDocumentTypeRequest, security: operations.ListSupportingDocumentTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSupportingDocumentTypeResponse>;
    /**
     * Updates a Bundle in an account.
     */
    updateBundle(req: operations.UpdateBundleRequest, security: operations.UpdateBundleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateBundleResponse>;
    /**
     * Update an existing End User.
     */
    updateEndUser(req: operations.UpdateEndUserRequest, security: operations.UpdateEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateEndUserResponse>;
    /**
     * Update an existing Supporting Document.
     */
    updateSupportingDocument(req: operations.UpdateSupportingDocumentRequest, security: operations.UpdateSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSupportingDocumentResponse>;
}
