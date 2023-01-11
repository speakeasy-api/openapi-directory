import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Ontology {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOntologySubset - Returns meta data of an ontology subset (slim)
    **/
    getOntologySubset(req: operations.GetOntologySubsetRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologySubsetResponse>;
    /**
     * getOntologyTerm - Returns meta data of an ontology term
    **/
    getOntologyTerm(req: operations.GetOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermResponse>;
    /**
     * getOntologyTermGraph - Returns graph of an ontology term
    **/
    getOntologyTermGraph(req: operations.GetOntologyTermGraphRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermGraphResponse>;
    /**
     * getOntologyTermSubgraph - Extract a subgraph from an ontology term
    **/
    getOntologyTermSubgraph(req: operations.GetOntologyTermSubgraphRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermSubgraphResponse>;
    /**
     * getOntologyTermSubsets - Returns subsets (slims) associated to an ontology term
    **/
    getOntologyTermSubsets(req: operations.GetOntologyTermSubsetsRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermSubsetsResponse>;
    /**
     * getOntologyTermsSharedAncestor - Returns the ancestor ontology terms shared by two ontology terms
    **/
    getOntologyTermsSharedAncestor(req: operations.GetOntologyTermsSharedAncestorRequest, config?: AxiosRequestConfig): Promise<operations.GetOntologyTermsSharedAncestorResponse>;
}
