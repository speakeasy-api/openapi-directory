import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NodeTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of node types.
     */
    computeNodeTypesAggregatedList(req: operations.ComputeNodeTypesAggregatedListRequest, security: operations.ComputeNodeTypesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTypesAggregatedListResponse>;
    /**
     * Returns the specified node type.
     */
    computeNodeTypesGet(req: operations.ComputeNodeTypesGetRequest, security: operations.ComputeNodeTypesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTypesGetResponse>;
    /**
     * Retrieves a list of node types available to the specified project.
     */
    computeNodeTypesList(req: operations.ComputeNodeTypesListRequest, security: operations.ComputeNodeTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeTypesListResponse>;
}
