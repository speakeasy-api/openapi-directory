import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Lookup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEnsemblGeneMappingUsingGet - Translate an RGD ID to an Ensembl Gene  ID
    **/
    getEnsemblGeneMappingUsingGet(req: operations.GetEnsemblGeneMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblGeneMappingUsingGetResponse>;
    /**
     * getEnsemblGeneMappingUsingPost - Translate RGD IDs to Ensembl Gene IDs
    **/
    getEnsemblGeneMappingUsingPost(req: operations.GetEnsemblGeneMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblGeneMappingUsingPostResponse>;
    /**
     * getEnsemblProteinMappingUsingGet - Translate an RGD ID to an Ensembl Protein ID
    **/
    getEnsemblProteinMappingUsingGet(req: operations.GetEnsemblProteinMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblProteinMappingUsingGetResponse>;
    /**
     * getEnsemblProteinMappingUsingPost - Translate RGD IDs to Ensembl Protein IDs
    **/
    getEnsemblProteinMappingUsingPost(req: operations.GetEnsemblProteinMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblProteinMappingUsingPostResponse>;
    /**
     * getEnsemblTranscriptMappingUsingGet - Translate an RGD ID to an Ensembl Transcript ID
    **/
    getEnsemblTranscriptMappingUsingGet(req: operations.GetEnsemblTranscriptMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblTranscriptMappingUsingGetResponse>;
    /**
     * getEnsemblTranscriptMappingUsingPost - Translate RGD IDs to Ensembl Transcript IDs
    **/
    getEnsemblTranscriptMappingUsingPost(req: operations.GetEnsemblTranscriptMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblTranscriptMappingUsingPostResponse>;
    /**
     * getGtexMappingUsingGet - Translate an RGD ID to an GTEx ID
    **/
    getGtexMappingUsingGet(req: operations.GetGtexMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGtexMappingUsingGetResponse>;
    /**
     * getGtexMappingUsingPost - Translate RGD IDs to GTEx IDs
    **/
    getGtexMappingUsingPost(req: operations.GetGtexMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetGtexMappingUsingPostResponse>;
    /**
     * getGenBankNucleotideMappingUsingGet - Translate an RGD ID to a GenBank Nucleotide ID
    **/
    getGenBankNucleotideMappingUsingGet(req: operations.GetGenBankNucleotideMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankNucleotideMappingUsingGetResponse>;
    /**
     * getGenBankNucleotideMappingUsingPost - Translate RGD IDs to GenBank Nucleotide IDs
    **/
    getGenBankNucleotideMappingUsingPost(req: operations.GetGenBankNucleotideMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankNucleotideMappingUsingPostResponse>;
    /**
     * getGenBankProteinMappingUsingGet - Translate an RGD ID to a GenBank Protein ID
    **/
    getGenBankProteinMappingUsingGet(req: operations.GetGenBankProteinMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankProteinMappingUsingGetResponse>;
    /**
     * getGenBankProteinMappingUsingPost - Translate RGD IDs to GenBank Protein IDs
    **/
    getGenBankProteinMappingUsingPost(req: operations.GetGenBankProteinMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankProteinMappingUsingPostResponse>;
    /**
     * getGeneTypesUsingGet - Returns a list of gene types avialable in RGD
    **/
    getGeneTypesUsingGet(config?: AxiosRequestConfig): Promise<operations.GetGeneTypesUsingGetResponse>;
    /**
     * getHgncMappingUsingGet - Translate an RGD ID to an HGNC ID
    **/
    getHgncMappingUsingGet(req: operations.GetHgncMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetHgncMappingUsingGetResponse>;
    /**
     * getHgncMappingUsingPost - Translate RGD IDs to HGNC IDs
    **/
    getHgncMappingUsingPost(req: operations.GetHgncMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetHgncMappingUsingPostResponse>;
    /**
     * getMgiMappingUsingGet - Translate an RGD ID to an MGI ID
    **/
    getMgiMappingUsingGet(req: operations.GetMgiMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMgiMappingUsingGetResponse>;
    /**
     * getMgiMappingUsingPost - Translate RGD IDs to MGI IDs
    **/
    getMgiMappingUsingPost(req: operations.GetMgiMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetMgiMappingUsingPostResponse>;
    /**
     * getMapsUsingGet - Return a list assembly maps for a species
    **/
    getMapsUsingGet(req: operations.GetMapsUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMapsUsingGetResponse>;
    /**
     * getMapsUsingGet1 - Return a standardUnit for an ontology if it exists
    **/
    getMapsUsingGet1(req: operations.GetMapsUsingGet1Request, config?: AxiosRequestConfig): Promise<operations.GetMapsUsingGet1Response>;
    /**
     * getNcbiGeneMappingUsingGet - Translate an RGD ID to an NCBI Gene ID
    **/
    getNcbiGeneMappingUsingGet(req: operations.GetNcbiGeneMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetNcbiGeneMappingUsingGetResponse>;
    /**
     * getNcbiGeneMappingUsingPost - Translate RGD IDs to NCBI Gene IDs
    **/
    getNcbiGeneMappingUsingPost(req: operations.GetNcbiGeneMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetNcbiGeneMappingUsingPostResponse>;
    /**
     * getSpeciesTypesUsingGet - Return a Map of species type keys available in RGD
    **/
    getSpeciesTypesUsingGet(config?: AxiosRequestConfig): Promise<operations.GetSpeciesTypesUsingGetResponse>;
    /**
     * getUniProtMappingUsingGet - Translate an RGD ID to a UniProt ID
    **/
    getUniProtMappingUsingGet(req: operations.GetUniProtMappingUsingGetRequest, config?: AxiosRequestConfig): Promise<operations.GetUniProtMappingUsingGetResponse>;
    /**
     * getUniProtMappingUsingPost - Translate RGD IDs to UniProt IDs
    **/
    getUniProtMappingUsingPost(req: operations.GetUniProtMappingUsingPostRequest, config?: AxiosRequestConfig): Promise<operations.GetUniProtMappingUsingPostResponse>;
}
