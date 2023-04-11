import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VpnGateways {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of VPN gateways.
     */
    computeVpnGatewaysAggregatedList(req: operations.ComputeVpnGatewaysAggregatedListRequest, security: operations.ComputeVpnGatewaysAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnGatewaysAggregatedListResponse>;
    /**
     * Deletes the specified VPN gateway.
     */
    computeVpnGatewaysDelete(req: operations.ComputeVpnGatewaysDeleteRequest, security: operations.ComputeVpnGatewaysDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnGatewaysDeleteResponse>;
    /**
     * Returns the specified VPN gateway.
     */
    computeVpnGatewaysGet(req: operations.ComputeVpnGatewaysGetRequest, security: operations.ComputeVpnGatewaysGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnGatewaysGetResponse>;
    /**
     * Returns the status for the specified VPN gateway.
     */
    computeVpnGatewaysGetStatus(req: operations.ComputeVpnGatewaysGetStatusRequest, security: operations.ComputeVpnGatewaysGetStatusSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnGatewaysGetStatusResponse>;
    /**
     * Creates a VPN gateway in the specified project and region using the data included in the request.
     */
    computeVpnGatewaysInsert(req: operations.ComputeVpnGatewaysInsertRequest, security: operations.ComputeVpnGatewaysInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnGatewaysInsertResponse>;
    /**
     * Retrieves a list of VPN gateways available to the specified project and region.
     */
    computeVpnGatewaysList(req: operations.ComputeVpnGatewaysListRequest, security: operations.ComputeVpnGatewaysListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnGatewaysListResponse>;
    /**
     * Sets the labels on a VpnGateway. To learn more about labels, read the Labeling Resources documentation.
     */
    computeVpnGatewaysSetLabels(req: operations.ComputeVpnGatewaysSetLabelsRequest, security: operations.ComputeVpnGatewaysSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnGatewaysSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeVpnGatewaysTestIamPermissions(req: operations.ComputeVpnGatewaysTestIamPermissionsRequest, security: operations.ComputeVpnGatewaysTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnGatewaysTestIamPermissionsResponse>;
}
