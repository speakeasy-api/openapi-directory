import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * OWL-level operations on an ontology
 */
export declare class OwlOntology {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Placeholder - use OWLery for now
     */
    getDlQuery(req: operations.GetDlQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetDlQueryResponse>;
    /**
     * Placeholder - use direct SPARQL endpoint for now
     */
    getSparqlQuery(req: operations.GetSparqlQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetSparqlQueryResponse>;
}
