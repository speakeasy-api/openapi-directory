import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LinkAggregations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a link aggregation group
     *
     * @remarks
     * Create a link aggregation group
     */
    createNetworkSwitchLinkAggregation(req: operations.CreateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchLinkAggregationResponse>;
    /**
     * Split a link aggregation group into separate ports
     *
     * @remarks
     * Split a link aggregation group into separate ports
     */
    deleteNetworkSwitchLinkAggregation(req: operations.DeleteNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchLinkAggregationResponse>;
    /**
     * List link aggregation groups
     *
     * @remarks
     * List link aggregation groups
     */
    getNetworkSwitchLinkAggregations(req: operations.GetNetworkSwitchLinkAggregationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchLinkAggregationsResponse>;
    /**
     * Update a link aggregation group
     *
     * @remarks
     * Update a link aggregation group
     */
    updateNetworkSwitchLinkAggregation(req: operations.UpdateNetworkSwitchLinkAggregationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchLinkAggregationResponse>;
}
