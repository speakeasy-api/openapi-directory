import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Alliance of Genome Resources
 */
export declare class Agr {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
     */
    getAffectedGenomicModelsUsingGET(req: operations.GETAffectedGenomicModelsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAffectedGenomicModelsUsingGETResponse>;
    /**
     * Get gene allele records submitted by RGD to AGR by taxonId
     */
    getAllelesForTaxonUsingGET(req: operations.GETAllelesForTaxonUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETAllelesForTaxonUsingGETResponse>;
    /**
     * Get expression annotations submitted by RGD to AGR by taxonId
     */
    getExpressionForTaxonUsingGET(req: operations.GETExpressionForTaxonUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETExpressionForTaxonUsingGETResponse>;
    /**
     * Get gene records submitted by RGD to AGR by taxonId
     */
    getGenesForLatestAssemblyUsingGET(req: operations.GETGenesForLatestAssemblyUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenesForLatestAssemblyUsingGETResponse>;
    /**
     * Get phenotype annotations submitted by RGD to AGR by taxonId
     */
    getPhenotypesForTaxonUsingGET(req: operations.GETPhenotypesForTaxonUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETPhenotypesForTaxonUsingGETResponse>;
    /**
     * Get basic variant records submitted by RGD to AGR by taxonId
     */
    getVariantsForTaxonUsingGET(req: operations.GETVariantsForTaxonUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETVariantsForTaxonUsingGETResponse>;
}
