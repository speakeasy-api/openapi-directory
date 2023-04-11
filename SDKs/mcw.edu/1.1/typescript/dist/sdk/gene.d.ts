import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Gene {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a list of genes annotated to an ontology term
     */
    getAllAnnotatedGenesUsingGET(req: operations.GETAllAnnotatedGenesUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAllAnnotatedGenesUsingGETResponse>;
    /**
     * Return a list of genes annotated to an ontology term
     */
    getAnnotatedGenesUsingPOST(req: shared.AnnotatedGeneRequest, config?: AxiosRequestConfig): Promise<operations.GetAnnotatedGenesUsingPOSTResponse>;
    /**
     * Return a list of gene alleles
     */
    getGeneAllelesUsingGET(req: operations.GETGeneAllelesUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGeneAllelesUsingGETResponse>;
    /**
     * Return a list of all genes with position information for an assembly
     */
    getGeneByMapKeyUsingGET(req: operations.GETGeneByMapKeyUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGeneByMapKeyUsingGETResponse>;
    /**
     * Get a gene record by RGD ID
     */
    getGeneByRgdIdUsingGET(req: operations.GETGeneByRgdIdUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGeneByRgdIdUsingGETResponse>;
    /**
     * Get a gene record by symbol and species type key
     */
    getGeneBySymbolUsingGET(req: operations.GETGeneBySymbolUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGeneBySymbolUsingGETResponse>;
    /**
     * Return a list of gene orthologs
     */
    getGeneOrthologsUsingGET(req: operations.GETGeneOrthologsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGeneOrthologsUsingGETResponse>;
    /**
     * Return a list of genes annotated to an ontology term
     */
    getGenesAnnotatedUsingGET(req: operations.GETGenesAnnotatedUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenesAnnotatedUsingGETResponse>;
    /**
     * Return a list of genes for an affymetrix ID
     */
    getGenesByAffyIdUsingGET(req: operations.GETGenesByAffyIdUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenesByAffyIdUsingGETResponse>;
    /**
     * Return a list of genes for an alias and species
     */
    getGenesByAliasSymbolUsingGET(req: operations.GETGenesByAliasSymbolUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenesByAliasSymbolUsingGETResponse>;
    /**
     * Return a list of genes by keyword and species type key
     */
    getGenesByKeywordUsingGET(req: operations.GETGenesByKeywordUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenesByKeywordUsingGETResponse>;
    /**
     * Return a list of genes position and map key
     */
    getGenesByPositionUsingGET(req: operations.GETGenesByPositionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenesByPositionUsingGETResponse>;
    /**
     * Return a list of all genes for a species in RGD
     */
    getGenesBySpeciesUsingGET(req: operations.GETGenesBySpeciesUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenesBySpeciesUsingGETResponse>;
    /**
     * Return a list of genes in region
     */
    getGenesInRegionUsingGET(req: operations.GETGenesInRegionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenesInRegionUsingGETResponse>;
    /**
     * Return a list of genes position and map key
     */
    getMappedGenesByPositionUsingGET(req: operations.GETMappedGenesByPositionUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETMappedGenesByPositionUsingGETResponse>;
    /**
     * Return a list of gene orthologs
     */
    getOrthologsByListUsingPOST(req: shared.OrthologRequest, config?: AxiosRequestConfig): Promise<operations.GetOrthologsByListUsingPOSTResponse>;
}
