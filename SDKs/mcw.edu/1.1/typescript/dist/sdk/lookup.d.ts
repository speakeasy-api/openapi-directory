import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Lookup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Translate an RGD ID to an Ensembl Gene  ID
     */
    getEnsemblGeneMappingUsingGET(req: operations.GETEnsemblGeneMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETEnsemblGeneMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to Ensembl Gene IDs
     */
    getEnsemblGeneMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblGeneMappingUsingPOSTResponse>;
    /**
     * Translate an RGD ID to an Ensembl Protein ID
     */
    getEnsemblProteinMappingUsingGET(req: operations.GETEnsemblProteinMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETEnsemblProteinMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to Ensembl Protein IDs
     */
    getEnsemblProteinMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblProteinMappingUsingPOSTResponse>;
    /**
     * Translate an RGD ID to an Ensembl Transcript ID
     */
    getEnsemblTranscriptMappingUsingGET(req: operations.GETEnsemblTranscriptMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETEnsemblTranscriptMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to Ensembl Transcript IDs
     */
    getEnsemblTranscriptMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetEnsemblTranscriptMappingUsingPOSTResponse>;
    /**
     * Translate an RGD ID to an GTEx ID
     */
    getGTEXMappingUsingGET(req: operations.GETGTEXMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGTEXMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to GTEx IDs
     */
    getGTEXMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetGTEXMappingUsingPOSTResponse>;
    /**
     * Translate an RGD ID to a GenBank Nucleotide ID
     */
    getGenBankNucleotideMappingUsingGET(req: operations.GETGenBankNucleotideMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenBankNucleotideMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to GenBank Nucleotide IDs
     */
    getGenBankNucleotideMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankNucleotideMappingUsingPOSTResponse>;
    /**
     * Translate an RGD ID to a GenBank Protein ID
     */
    getGenBankProteinMappingUsingGET(req: operations.GETGenBankProteinMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETGenBankProteinMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to GenBank Protein IDs
     */
    getGenBankProteinMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetGenBankProteinMappingUsingPOSTResponse>;
    /**
     * Returns a list of gene types avialable in RGD
     */
    getGeneTypesUsingGET(config?: AxiosRequestConfig): Promise<operations.GETGeneTypesUsingGETResponse>;
    /**
     * Translate an RGD ID to an HGNC ID
     */
    getHGNCMappingUsingGET(req: operations.GETHGNCMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETHGNCMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to HGNC IDs
     */
    getHGNCMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetHGNCMappingUsingPOSTResponse>;
    /**
     * Translate an RGD ID to an MGI ID
     */
    getMGIMappingUsingGET(req: operations.GETMGIMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETMGIMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to MGI IDs
     */
    getMGIMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetMGIMappingUsingPOSTResponse>;
    /**
     * Return a list assembly maps for a species
     */
    getMapsUsingGET(req: operations.GETMapsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETMapsUsingGETResponse>;
    /**
     * Return a standardUnit for an ontology if it exists
     */
    getMapsUsingGET1(req: operations.GETMapsUsingGet1Request, config?: AxiosRequestConfig): Promise<operations.GETMapsUsingGet1Response>;
    /**
     * Translate an RGD ID to an NCBI Gene ID
     */
    getNCBIGeneMappingUsingGET(req: operations.GETNCBIGeneMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETNCBIGeneMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to NCBI Gene IDs
     */
    getNCBIGeneMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetNCBIGeneMappingUsingPOSTResponse>;
    /**
     * Return a Map of species type keys available in RGD
     */
    getSpeciesTypesUsingGET(config?: AxiosRequestConfig): Promise<operations.GETSpeciesTypesUsingGETResponse>;
    /**
     * Translate an RGD ID to a UniProt ID
     */
    getUniProtMappingUsingGET(req: operations.GETUniProtMappingUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETUniProtMappingUsingGETResponse>;
    /**
     * Translate RGD IDs to UniProt IDs
     */
    getUniProtMappingUsingPOST(req: shared.RGDIDListRequest, config?: AxiosRequestConfig): Promise<operations.GetUniProtMappingUsingPOSTResponse>;
}
