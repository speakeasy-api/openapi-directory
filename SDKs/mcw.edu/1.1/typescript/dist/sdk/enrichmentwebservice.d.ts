import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EnrichmentWebService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEnrichmentDataUsingPost - Return a list of genes annotated to the term.Genes are rgdids separated by comma.Species type is an integer value.term is the ontology
    **/
    getEnrichmentDataUsingPost(req: operations.GetEnrichmentDataUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetEnrichmentDataUsingPostResponse>;
    /**
     * getEnrichmentDataUsingPost1 - Return a chart of ontology terms annotated to the genes.Genes are rgdids separated by comma.Species type is an integer value.Aspect is the Ontology group
    **/
    getEnrichmentDataUsingPost1(req: operations.GetEnrichmentDataUsingPost1Request, config?: AxiosRequestConfig): Promise<operations.GetEnrichmentDataUsingPost1Response>;
}
