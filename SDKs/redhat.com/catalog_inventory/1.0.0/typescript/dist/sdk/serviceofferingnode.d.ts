import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceOfferingNode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listServiceOfferingNodes - List ServiceOfferingNodes
     *
     * Returns an array of ServiceOfferingNode objects
    **/
    listServiceOfferingNodes(req: operations.ListServiceOfferingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceOfferingNodesResponse>;
    /**
     * showServiceOfferingNode - Show an existing ServiceOfferingNode
     *
     * Returns a ServiceOfferingNode object
    **/
    showServiceOfferingNode(req: operations.ShowServiceOfferingNodeRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceOfferingNodeResponse>;
}
