import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations on Ontology Terms and Subsets
 */
export declare class Ontology {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns meta data of an ontology subset (slim)
     */
    getOntologySubset(req: operations.GetOntologySubsetRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologySubsetResponse>;
    /**
     * Returns meta data of an ontology term
     */
    getOntologyTerm(req: operations.GetOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermResponse>;
    /**
     * Returns graph of an ontology term
     */
    getOntologyTermGraph(req: operations.GetOntologyTermGraphRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermGraphResponse>;
    /**
     * Extract a subgraph from an ontology term
     */
    getOntologyTermSubgraph(req: operations.GetOntologyTermSubgraphRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermSubgraphResponse>;
    /**
     * Returns subsets (slims) associated to an ontology term
     */
    getOntologyTermSubsets(req: operations.GetOntologyTermSubsetsRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermSubsetsResponse>;
    /**
     * Returns the ancestor ontology terms shared by two ontology terms
     */
    getOntologyTermsSharedAncestor(req: operations.GetOntologyTermsSharedAncestorRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermsSharedAncestorResponse>;
}
