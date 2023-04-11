import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Methods to retrieve and inspect entries from the language models
 */
export declare class LanguageModelDirectAccess {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get family details
     *
     * @remarks
     * Fetches and outputs metadata for a family from the Tisane language models.
     */
    getFamilyDetails(req: operations.GetFamilyDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetFamilyDetailsResponse>;
    /**
     * List feature values
     *
     * @remarks
     * Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.
     *
     * Returns the values as a JSON array of strings.
     */
    listFeatureValues(req: operations.ListFeatureValuesRequest, config?: AxiosRequestConfig): Promise<operations.ListFeatureValuesResponse>;
    /**
     * List hypernyms
     *
     * @remarks
     * Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. "vehicle" is a hypernym of "truck".
     */
    listHypernyms(req: operations.ListHypernymsRequest, config?: AxiosRequestConfig): Promise<operations.ListHypernymsResponse>;
    /**
     * List hyponyms
     *
     * @remarks
     * Lists all hyponyms related to a family. A hyponym is a child concent. E.g. "truck" is a hypernym of "vehicle".
     */
    listHyponyms(req: operations.ListHyponymsRequest, config?: AxiosRequestConfig): Promise<operations.ListHyponymsResponse>;
    /**
     * List inflected forms
     *
     * @remarks
     * List inflected forms
     */
    listInflectedForms(req: operations.ListInflectedFormsRequest, config?: AxiosRequestConfig): Promise<operations.ListInflectedFormsResponse>;
    /**
     * List word senses
     *
     * @remarks
     * Fetches and outputs all senses related to a word.
     */
    listWordSenses(req: operations.ListWordSensesRequest, config?: AxiosRequestConfig): Promise<operations.ListWordSensesResponse>;
}
