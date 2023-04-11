import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations over data graphs
 */
export declare class Graph {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns edges emanating from a given node
     */
    getEdgeResource(req: operations.GetEdgeResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetEdgeResourceResponse>;
    /**
     * Returns a graph node
     *
     * @remarks
     * A node is an abstract representation of some kind of entity. The entity may be a physical thing such as a patient,
     * a molecular entity such as a gene or protein, or a conceptual entity such as a class from an ontology.
     */
    getNodeResource(req: operations.GetNodeResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetNodeResourceResponse>;
}
