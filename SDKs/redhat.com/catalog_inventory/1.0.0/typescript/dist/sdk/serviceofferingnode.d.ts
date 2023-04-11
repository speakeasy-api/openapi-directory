import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceOfferingNode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List ServiceOfferingNodes
     *
     * @remarks
     * Returns an array of ServiceOfferingNode objects
     */
    listServiceOfferingNodes(req: operations.ListServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingNodesResponse>;
    /**
     * Show an existing ServiceOfferingNode
     *
     * @remarks
     * Returns a ServiceOfferingNode object
     */
    showServiceOfferingNode(req: operations.ShowServiceOfferingNodeRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceOfferingNodeResponse>;
}
