import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ExternalVpnGateways {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified externalVpnGateway.
     */
    computeExternalVpnGatewaysDelete(req: operations.ComputeExternalVpnGatewaysDeleteRequest, security: operations.ComputeExternalVpnGatewaysDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeExternalVpnGatewaysDeleteResponse>;
    /**
     * Returns the specified externalVpnGateway. Get a list of available externalVpnGateways by making a list() request.
     */
    computeExternalVpnGatewaysGet(req: operations.ComputeExternalVpnGatewaysGetRequest, security: operations.ComputeExternalVpnGatewaysGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeExternalVpnGatewaysGetResponse>;
    /**
     * Creates a ExternalVpnGateway in the specified project using the data included in the request.
     */
    computeExternalVpnGatewaysInsert(req: operations.ComputeExternalVpnGatewaysInsertRequest, security: operations.ComputeExternalVpnGatewaysInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeExternalVpnGatewaysInsertResponse>;
    /**
     * Retrieves the list of ExternalVpnGateway available to the specified project.
     */
    computeExternalVpnGatewaysList(req: operations.ComputeExternalVpnGatewaysListRequest, security: operations.ComputeExternalVpnGatewaysListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeExternalVpnGatewaysListResponse>;
    /**
     * Sets the labels on an ExternalVpnGateway. To learn more about labels, read the Labeling Resources documentation.
     */
    computeExternalVpnGatewaysSetLabels(req: operations.ComputeExternalVpnGatewaysSetLabelsRequest, security: operations.ComputeExternalVpnGatewaysSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeExternalVpnGatewaysSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeExternalVpnGatewaysTestIamPermissions(req: operations.ComputeExternalVpnGatewaysTestIamPermissionsRequest, security: operations.ComputeExternalVpnGatewaysTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeExternalVpnGatewaysTestIamPermissionsResponse>;
}
