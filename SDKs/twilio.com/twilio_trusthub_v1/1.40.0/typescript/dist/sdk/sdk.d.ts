import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://trusthub.twilio.com"];
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
     * Create a new Customer-Profile.
     */
    createCustomerProfile(req: operations.CreateCustomerProfileCreateCustomerProfileRequest, security: operations.CreateCustomerProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCustomerProfileResponse>;
    /**
     * Create a new Assigned Item.
     */
    createCustomerProfileChannelEndpointAssignment(req: operations.CreateCustomerProfileChannelEndpointAssignmentRequest, security: operations.CreateCustomerProfileChannelEndpointAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCustomerProfileChannelEndpointAssignmentResponse>;
    /**
     * Create a new Assigned Item.
     */
    createCustomerProfileEntityAssignment(req: operations.CreateCustomerProfileEntityAssignmentRequest, security: operations.CreateCustomerProfileEntityAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCustomerProfileEntityAssignmentResponse>;
    /**
     * Create a new Evaluation
     */
    createCustomerProfileEvaluation(req: operations.CreateCustomerProfileEvaluationRequest, security: operations.CreateCustomerProfileEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCustomerProfileEvaluationResponse>;
    /**
     * Create a new End User.
     */
    createEndUser(req: operations.CreateEndUserCreateEndUserRequest, security: operations.CreateEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateEndUserResponse>;
    /**
     * Create a new Supporting Document.
     */
    createSupportingDocument(req: operations.CreateSupportingDocumentCreateSupportingDocumentRequest, security: operations.CreateSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSupportingDocumentResponse>;
    /**
     * Create a new Customer-Profile.
     */
    createTrustProduct(req: operations.CreateTrustProductCreateTrustProductRequest, security: operations.CreateTrustProductSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTrustProductResponse>;
    /**
     * Create a new Assigned Item.
     */
    createTrustProductChannelEndpointAssignment(req: operations.CreateTrustProductChannelEndpointAssignmentRequest, security: operations.CreateTrustProductChannelEndpointAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTrustProductChannelEndpointAssignmentResponse>;
    /**
     * Create a new Assigned Item.
     */
    createTrustProductEntityAssignment(req: operations.CreateTrustProductEntityAssignmentRequest, security: operations.CreateTrustProductEntityAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTrustProductEntityAssignmentResponse>;
    /**
     * Create a new Evaluation
     */
    createTrustProductEvaluation(req: operations.CreateTrustProductEvaluationRequest, security: operations.CreateTrustProductEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTrustProductEvaluationResponse>;
    /**
     * Delete a specific Customer-Profile.
     */
    deleteCustomerProfile(req: operations.DeleteCustomerProfileRequest, security: operations.DeleteCustomerProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerProfileResponse>;
    /**
     * Remove an Assignment Item Instance.
     */
    deleteCustomerProfileChannelEndpointAssignment(req: operations.DeleteCustomerProfileChannelEndpointAssignmentRequest, security: operations.DeleteCustomerProfileChannelEndpointAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerProfileChannelEndpointAssignmentResponse>;
    /**
     * Remove an Assignment Item Instance.
     */
    deleteCustomerProfileEntityAssignment(req: operations.DeleteCustomerProfileEntityAssignmentRequest, security: operations.DeleteCustomerProfileEntityAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCustomerProfileEntityAssignmentResponse>;
    /**
     * Delete a specific End User.
     */
    deleteEndUser(req: operations.DeleteEndUserRequest, security: operations.DeleteEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteEndUserResponse>;
    /**
     * Delete a specific Supporting Document.
     */
    deleteSupportingDocument(req: operations.DeleteSupportingDocumentRequest, security: operations.DeleteSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSupportingDocumentResponse>;
    /**
     * Delete a specific Customer-Profile.
     */
    deleteTrustProduct(req: operations.DeleteTrustProductRequest, security: operations.DeleteTrustProductSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTrustProductResponse>;
    /**
     * Remove an Assignment Item Instance.
     */
    deleteTrustProductChannelEndpointAssignment(req: operations.DeleteTrustProductChannelEndpointAssignmentRequest, security: operations.DeleteTrustProductChannelEndpointAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTrustProductChannelEndpointAssignmentResponse>;
    /**
     * Remove an Assignment Item Instance.
     */
    deleteTrustProductEntityAssignment(req: operations.DeleteTrustProductEntityAssignmentRequest, security: operations.DeleteTrustProductEntityAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTrustProductEntityAssignmentResponse>;
    /**
     * Fetch a specific Customer-Profile instance.
     */
    fetchCustomerProfile(req: operations.FetchCustomerProfileRequest, security: operations.FetchCustomerProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCustomerProfileResponse>;
    /**
     * Fetch specific Assigned Item Instance.
     */
    fetchCustomerProfileChannelEndpointAssignment(req: operations.FetchCustomerProfileChannelEndpointAssignmentRequest, security: operations.FetchCustomerProfileChannelEndpointAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCustomerProfileChannelEndpointAssignmentResponse>;
    /**
     * Fetch specific Assigned Item Instance.
     */
    fetchCustomerProfileEntityAssignment(req: operations.FetchCustomerProfileEntityAssignmentRequest, security: operations.FetchCustomerProfileEntityAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCustomerProfileEntityAssignmentResponse>;
    /**
     * Fetch specific Evaluation Instance.
     */
    fetchCustomerProfileEvaluation(req: operations.FetchCustomerProfileEvaluationRequest, security: operations.FetchCustomerProfileEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCustomerProfileEvaluationResponse>;
    /**
     * Fetch specific End User Instance.
     */
    fetchEndUser(req: operations.FetchEndUserRequest, security: operations.FetchEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEndUserResponse>;
    /**
     * Fetch a specific End-User Type Instance.
     */
    fetchEndUserType(req: operations.FetchEndUserTypeRequest, security: operations.FetchEndUserTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEndUserTypeResponse>;
    /**
     * Fetch specific Policy Instance.
     */
    fetchPolicies(req: operations.FetchPoliciesRequest, security: operations.FetchPoliciesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchPoliciesResponse>;
    /**
     * Fetch specific Supporting Document Instance.
     */
    fetchSupportingDocument(req: operations.FetchSupportingDocumentRequest, security: operations.FetchSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSupportingDocumentResponse>;
    /**
     * Fetch a specific Supporting Document Type Instance.
     */
    fetchSupportingDocumentType(req: operations.FetchSupportingDocumentTypeRequest, security: operations.FetchSupportingDocumentTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSupportingDocumentTypeResponse>;
    /**
     * Fetch a specific Customer-Profile instance.
     */
    fetchTrustProduct(req: operations.FetchTrustProductRequest, security: operations.FetchTrustProductSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTrustProductResponse>;
    /**
     * Fetch specific Assigned Item Instance.
     */
    fetchTrustProductChannelEndpointAssignment(req: operations.FetchTrustProductChannelEndpointAssignmentRequest, security: operations.FetchTrustProductChannelEndpointAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTrustProductChannelEndpointAssignmentResponse>;
    /**
     * Fetch specific Assigned Item Instance.
     */
    fetchTrustProductEntityAssignment(req: operations.FetchTrustProductEntityAssignmentRequest, security: operations.FetchTrustProductEntityAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTrustProductEntityAssignmentResponse>;
    /**
     * Fetch specific Evaluation Instance.
     */
    fetchTrustProductEvaluation(req: operations.FetchTrustProductEvaluationRequest, security: operations.FetchTrustProductEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTrustProductEvaluationResponse>;
    /**
     * Retrieve a list of all Customer-Profiles for an account.
     */
    listCustomerProfile(req: operations.ListCustomerProfileRequest, security: operations.ListCustomerProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCustomerProfileResponse>;
    /**
     * Retrieve a list of all Assigned Items for an account.
     */
    listCustomerProfileChannelEndpointAssignment(req: operations.ListCustomerProfileChannelEndpointAssignmentRequest, security: operations.ListCustomerProfileChannelEndpointAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCustomerProfileChannelEndpointAssignmentResponse>;
    /**
     * Retrieve a list of all Assigned Items for an account.
     */
    listCustomerProfileEntityAssignment(req: operations.ListCustomerProfileEntityAssignmentRequest, security: operations.ListCustomerProfileEntityAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCustomerProfileEntityAssignmentResponse>;
    /**
     * Retrieve a list of Evaluations associated to the customer_profile resource.
     */
    listCustomerProfileEvaluation(req: operations.ListCustomerProfileEvaluationRequest, security: operations.ListCustomerProfileEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCustomerProfileEvaluationResponse>;
    /**
     * Retrieve a list of all End User for an account.
     */
    listEndUser(req: operations.ListEndUserRequest, security: operations.ListEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEndUserResponse>;
    /**
     * Retrieve a list of all End-User Types.
     */
    listEndUserType(req: operations.ListEndUserTypeRequest, security: operations.ListEndUserTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEndUserTypeResponse>;
    /**
     * Retrieve a list of all Policys.
     */
    listPolicies(req: operations.ListPoliciesRequest, security: operations.ListPoliciesSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListPoliciesResponse>;
    /**
     * Retrieve a list of all Supporting Document for an account.
     */
    listSupportingDocument(req: operations.ListSupportingDocumentRequest, security: operations.ListSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSupportingDocumentResponse>;
    /**
     * Retrieve a list of all Supporting Document Types.
     */
    listSupportingDocumentType(req: operations.ListSupportingDocumentTypeRequest, security: operations.ListSupportingDocumentTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSupportingDocumentTypeResponse>;
    /**
     * Retrieve a list of all Customer-Profiles for an account.
     */
    listTrustProduct(req: operations.ListTrustProductRequest, security: operations.ListTrustProductSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTrustProductResponse>;
    /**
     * Retrieve a list of all Assigned Items for an account.
     */
    listTrustProductChannelEndpointAssignment(req: operations.ListTrustProductChannelEndpointAssignmentRequest, security: operations.ListTrustProductChannelEndpointAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTrustProductChannelEndpointAssignmentResponse>;
    /**
     * Retrieve a list of all Assigned Items for an account.
     */
    listTrustProductEntityAssignment(req: operations.ListTrustProductEntityAssignmentRequest, security: operations.ListTrustProductEntityAssignmentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTrustProductEntityAssignmentResponse>;
    /**
     * Retrieve a list of Evaluations associated to the trust_product resource.
     */
    listTrustProductEvaluation(req: operations.ListTrustProductEvaluationRequest, security: operations.ListTrustProductEvaluationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTrustProductEvaluationResponse>;
    /**
     * Updates a Customer-Profile in an account.
     */
    updateCustomerProfile(req: operations.UpdateCustomerProfileRequest, security: operations.UpdateCustomerProfileSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateCustomerProfileResponse>;
    /**
     * Update an existing End User.
     */
    updateEndUser(req: operations.UpdateEndUserRequest, security: operations.UpdateEndUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateEndUserResponse>;
    /**
     * Update an existing Supporting Document.
     */
    updateSupportingDocument(req: operations.UpdateSupportingDocumentRequest, security: operations.UpdateSupportingDocumentSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSupportingDocumentResponse>;
    /**
     * Updates a Customer-Profile in an account.
     */
    updateTrustProduct(req: operations.UpdateTrustProductRequest, security: operations.UpdateTrustProductSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTrustProductResponse>;
}
