import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Enrichment Web Service
 */
export declare class EnrichmentWebService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
     */
    getEnrichmentDataUsingPOST(req: shared.EnrichmentGeneRequest, config?: AxiosRequestConfig): Promise<operations.GetEnrichmentDataUsingPOSTResponse>;
    /**
     * Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
     */
    getEnrichmentDataUsingPOST1(req: shared.EnrichmentRequest, config?: AxiosRequestConfig): Promise<operations.GetEnrichmentDataUsingPost1Response>;
}
