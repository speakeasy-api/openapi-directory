import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Administrative services, such as creating or deleting corpora
 */
export declare class AdminService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Corpus
     */
    createCorpus(req: operations.CreateCorpusRequest, config?: AxiosRequestConfig): Promise<operations.CreateCorpusResponse>;
    /**
     * Delete Corpus
     */
    deleteCorpus(req: operations.DeleteCorpusRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCorpusResponse>;
    /**
     * List Corpora
     */
    listCorpora(req: operations.ListCorporaRequest, config?: AxiosRequestConfig): Promise<operations.ListCorporaResponse>;
    /**
     * Reset Corpus
     */
    resetCorpus(req: operations.ResetCorpusRequest, config?: AxiosRequestConfig): Promise<operations.ResetCorpusResponse>;
}
