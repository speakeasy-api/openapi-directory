import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sentences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * A random sentence
     */
    getSentences(req: operations.GetSentencesRequest, config?: AxiosRequestConfig): Promise<operations.GetSentencesResponse>;
    /**
     * Random sentences from a specific book
     */
    getSentencesFromBook(req: operations.GetSentencesFromBookRequest, config?: AxiosRequestConfig): Promise<operations.GetSentencesFromBookResponse>;
    /**
     * A specific sentence
     */
    getSpecificSentence(req: operations.GetSpecificSentenceRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecificSentenceResponse>;
}
