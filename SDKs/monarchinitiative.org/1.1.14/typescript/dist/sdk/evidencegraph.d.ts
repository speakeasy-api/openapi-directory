import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations on evidence graphs
 */
export declare class EvidenceGraph {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns evidence graph object for a given association
     *
     * @remarks
     * Note that every association is assumed to have a unique ID
     */
    getEvidenceGraphObject(req: operations.GetEvidenceGraphObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceGraphObjectResponse>;
    /**
     * Returns evidence as a association_results object given an association
     *
     * @remarks
     * Note that every association is assumed to have a unique ID
     */
    getEvidenceGraphTable(req: operations.GetEvidenceGraphTableRequest, config?: AxiosRequestConfig): Promise<operations.GetEvidenceGraphTableResponse>;
}
