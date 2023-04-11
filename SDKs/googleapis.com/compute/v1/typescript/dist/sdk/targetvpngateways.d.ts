import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TargetVpnGateways {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of target VPN gateways.
     */
    computeTargetVpnGatewaysAggregatedList(req: operations.ComputeTargetVpnGatewaysAggregatedListRequest, security: operations.ComputeTargetVpnGatewaysAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetVpnGatewaysAggregatedListResponse>;
    /**
     * Deletes the specified target VPN gateway.
     */
    computeTargetVpnGatewaysDelete(req: operations.ComputeTargetVpnGatewaysDeleteRequest, security: operations.ComputeTargetVpnGatewaysDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetVpnGatewaysDeleteResponse>;
    /**
     * Returns the specified target VPN gateway.
     */
    computeTargetVpnGatewaysGet(req: operations.ComputeTargetVpnGatewaysGetRequest, security: operations.ComputeTargetVpnGatewaysGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetVpnGatewaysGetResponse>;
    /**
     * Creates a target VPN gateway in the specified project and region using the data included in the request.
     */
    computeTargetVpnGatewaysInsert(req: operations.ComputeTargetVpnGatewaysInsertRequest, security: operations.ComputeTargetVpnGatewaysInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetVpnGatewaysInsertResponse>;
    /**
     * Retrieves a list of target VPN gateways available to the specified project and region.
     */
    computeTargetVpnGatewaysList(req: operations.ComputeTargetVpnGatewaysListRequest, security: operations.ComputeTargetVpnGatewaysListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetVpnGatewaysListResponse>;
    /**
     * Sets the labels on a TargetVpnGateway. To learn more about labels, read the Labeling Resources documentation.
     */
    computeTargetVpnGatewaysSetLabels(req: operations.ComputeTargetVpnGatewaysSetLabelsRequest, security: operations.ComputeTargetVpnGatewaysSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeTargetVpnGatewaysSetLabelsResponse>;
}
