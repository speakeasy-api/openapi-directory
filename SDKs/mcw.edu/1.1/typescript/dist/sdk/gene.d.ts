import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Gene {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAllAnnotatedGenesUsingGet - Return a list of genes annotated to an ontology term
    **/
    getAllAnnotatedGenesUsingGet(req: operations.GetAllAnnotatedGenesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAllAnnotatedGenesUsingGetResponse>;
    /**
     * getAnnotatedGenesUsingPost - Return a list of genes annotated to an ontology term
    **/
    getAnnotatedGenesUsingPost(req: operations.GetAnnotatedGenesUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotatedGenesUsingPostResponse>;
    /**
     * getGeneAllelesUsingGet - Return a list of gene alleles
    **/
    getGeneAllelesUsingGet(req: operations.GetGeneAllelesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneAllelesUsingGetResponse>;
    /**
     * getGeneByMapKeyUsingGet - Return a list of all genes with position information for an assembly
    **/
    getGeneByMapKeyUsingGet(req: operations.GetGeneByMapKeyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneByMapKeyUsingGetResponse>;
    /**
     * getGeneByRgdIdUsingGet - Get a gene record by RGD ID
    **/
    getGeneByRgdIdUsingGet(req: operations.GetGeneByRgdIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneByRgdIdUsingGetResponse>;
    /**
     * getGeneBySymbolUsingGet - Get a gene record by symbol and species type key
    **/
    getGeneBySymbolUsingGet(req: operations.GetGeneBySymbolUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneBySymbolUsingGetResponse>;
    /**
     * getGeneOrthologsUsingGet - Return a list of gene orthologs
    **/
    getGeneOrthologsUsingGet(req: operations.GetGeneOrthologsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGeneOrthologsUsingGetResponse>;
    /**
     * getGenesAnnotatedUsingGet - Return a list of genes annotated to an ontology term
    **/
    getGenesAnnotatedUsingGet(req: operations.GetGenesAnnotatedUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesAnnotatedUsingGetResponse>;
    /**
     * getGenesByAffyIdUsingGet - Return a list of genes for an affymetrix ID
    **/
    getGenesByAffyIdUsingGet(req: operations.GetGenesByAffyIdUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesByAffyIdUsingGetResponse>;
    /**
     * getGenesByAliasSymbolUsingGet - Return a list of genes for an alias and species
    **/
    getGenesByAliasSymbolUsingGet(req: operations.GetGenesByAliasSymbolUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesByAliasSymbolUsingGetResponse>;
    /**
     * getGenesByKeywordUsingGet - Return a list of genes by keyword and species type key
    **/
    getGenesByKeywordUsingGet(req: operations.GetGenesByKeywordUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesByKeywordUsingGetResponse>;
    /**
     * getGenesByPositionUsingGet - Return a list of genes position and map key
    **/
    getGenesByPositionUsingGet(req: operations.GetGenesByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesByPositionUsingGetResponse>;
    /**
     * getGenesBySpeciesUsingGet - Return a list of all genes for a species in RGD
    **/
    getGenesBySpeciesUsingGet(req: operations.GetGenesBySpeciesUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesBySpeciesUsingGetResponse>;
    /**
     * getGenesInRegionUsingGet - Return a list of genes in region
    **/
    getGenesInRegionUsingGet(req: operations.GetGenesInRegionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesInRegionUsingGetResponse>;
    /**
     * getMappedGenesByPositionUsingGet - Return a list of genes position and map key
    **/
    getMappedGenesByPositionUsingGet(req: operations.GetMappedGenesByPositionUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMappedGenesByPositionUsingGetResponse>;
    /**
     * getOrthologsByListUsingPost - Return a list of gene orthologs
    **/
    getOrthologsByListUsingPost(req: operations.GetOrthologsByListUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetOrthologsByListUsingPostResponse>;
}
