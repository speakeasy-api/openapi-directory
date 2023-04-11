import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Interconnects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified Interconnect.
     */
    computeInterconnectsDelete(req: operations.ComputeInterconnectsDeleteRequest, security: operations.ComputeInterconnectsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsDeleteResponse>;
    /**
     * Returns the specified Interconnect. Get a list of available Interconnects by making a list() request.
     */
    computeInterconnectsGet(req: operations.ComputeInterconnectsGetRequest, security: operations.ComputeInterconnectsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsGetResponse>;
    /**
     * Returns the interconnectDiagnostics for the specified Interconnect.
     */
    computeInterconnectsGetDiagnostics(req: operations.ComputeInterconnectsGetDiagnosticsRequest, security: operations.ComputeInterconnectsGetDiagnosticsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsGetDiagnosticsResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeInterconnectsGetIamPolicy(req: operations.ComputeInterconnectsGetIamPolicyRequest, security: operations.ComputeInterconnectsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsGetIamPolicyResponse>;
    /**
     * Returns the interconnectMacsecConfig for the specified Interconnect.
     */
    computeInterconnectsGetMacsecConfig(req: operations.ComputeInterconnectsGetMacsecConfigRequest, security: operations.ComputeInterconnectsGetMacsecConfigSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsGetMacsecConfigResponse>;
    /**
     * Creates an Interconnect in the specified project using the data included in the request.
     */
    computeInterconnectsInsert(req: operations.ComputeInterconnectsInsertRequest, security: operations.ComputeInterconnectsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsInsertResponse>;
    /**
     * Retrieves the list of Interconnects available to the specified project.
     */
    computeInterconnectsList(req: operations.ComputeInterconnectsListRequest, security: operations.ComputeInterconnectsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsListResponse>;
    /**
     * Updates the specified Interconnect with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     */
    computeInterconnectsPatch(req: operations.ComputeInterconnectsPatchRequest, security: operations.ComputeInterconnectsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeInterconnectsSetIamPolicy(req: operations.ComputeInterconnectsSetIamPolicyRequest, security: operations.ComputeInterconnectsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsSetIamPolicyResponse>;
    /**
     * Sets the labels on an Interconnect. To learn more about labels, read the Labeling Resources documentation.
     */
    computeInterconnectsSetLabels(req: operations.ComputeInterconnectsSetLabelsRequest, security: operations.ComputeInterconnectsSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeInterconnectsTestIamPermissions(req: operations.ComputeInterconnectsTestIamPermissionsRequest, security: operations.ComputeInterconnectsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeInterconnectsTestIamPermissionsResponse>;
}
