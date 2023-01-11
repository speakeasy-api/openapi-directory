import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Agr {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAffectedGenomicModelsUsingGet - Get affected genomic models (rat strains with gene alleles) submitted by RGD to AGR by taxonId
    **/
    getAffectedGenomicModelsUsingGet(req: operations.GetAffectedGenomicModelsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAffectedGenomicModelsUsingGetResponse>;
    /**
     * getAllelesForTaxonUsingGet - Get gene allele records submitted by RGD to AGR by taxonId
    **/
    getAllelesForTaxonUsingGet(req: operations.GetAllelesForTaxonUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetAllelesForTaxonUsingGetResponse>;
    /**
     * getExpressionForTaxonUsingGet - Get expression annotations submitted by RGD to AGR by taxonId
    **/
    getExpressionForTaxonUsingGet(req: operations.GetExpressionForTaxonUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetExpressionForTaxonUsingGetResponse>;
    /**
     * getGenesForLatestAssemblyUsingGet - Get gene records submitted by RGD to AGR by taxonId
    **/
    getGenesForLatestAssemblyUsingGet(req: operations.GetGenesForLatestAssemblyUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenesForLatestAssemblyUsingGetResponse>;
    /**
     * getPhenotypesForTaxonUsingGet - Get phenotype annotations submitted by RGD to AGR by taxonId
    **/
    getPhenotypesForTaxonUsingGet(req: operations.GetPhenotypesForTaxonUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetPhenotypesForTaxonUsingGetResponse>;
    /**
     * getVariantsForTaxonUsingGet - Get basic variant records submitted by RGD to AGR by taxonId
    **/
    getVariantsForTaxonUsingGet(req: operations.GetVariantsForTaxonUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetVariantsForTaxonUsingGetResponse>;
}
