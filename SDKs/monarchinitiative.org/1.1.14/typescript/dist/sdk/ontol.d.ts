import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * extract a subgraph from an ontology
 */
export declare class Ontol {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Extract a subgraph from an ontology
     */
    getExtractOntologySubgraphResource(req: operations.GetExtractOntologySubgraphResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetExtractOntologySubgraphResourceResponse>;
    /**
     * Returns information content (IC) for a set of relevant ontology classes
     *
     * @remarks
     * ```
     * IC = -log2( freq(t) / popSize )
     * ```
     *
     * Here the frequency and population is calculated for a particular dataset:
     * e.g. all human disease-phenotype associations
     */
    getInformationContentResource(req: operations.GetInformationContentResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetInformationContentResourceResponse>;
    /**
     * Extract a subgraph from an ontology
     */
    postExtractOntologySubgraphResource(req: operations.PostExtractOntologySubgraphResourceRequest, config?: AxiosRequestConfig): Promise<operations.PostExtractOntologySubgraphResourceResponse>;
}
