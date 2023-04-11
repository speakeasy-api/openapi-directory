import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
     */
    languageDocumentsAnalyzeEntities(req: operations.LanguageDocumentsAnalyzeEntitiesRequest, security: operations.LanguageDocumentsAnalyzeEntitiesSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeEntitiesResponse>;
    /**
     * Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
     */
    languageDocumentsAnalyzeEntitySentiment(req: operations.LanguageDocumentsAnalyzeEntitySentimentRequest, security: operations.LanguageDocumentsAnalyzeEntitySentimentSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeEntitySentimentResponse>;
    /**
     * Analyzes the sentiment of the provided text.
     */
    languageDocumentsAnalyzeSentiment(req: operations.LanguageDocumentsAnalyzeSentimentRequest, security: operations.LanguageDocumentsAnalyzeSentimentSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeSentimentResponse>;
    /**
     * Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
     */
    languageDocumentsAnalyzeSyntax(req: operations.LanguageDocumentsAnalyzeSyntaxRequest, security: operations.LanguageDocumentsAnalyzeSyntaxSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnalyzeSyntaxResponse>;
    /**
     * A convenience method that provides all the features that analyzeSentiment, analyzeEntities, and analyzeSyntax provide in one call.
     */
    languageDocumentsAnnotateText(req: operations.LanguageDocumentsAnnotateTextRequest, security: operations.LanguageDocumentsAnnotateTextSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsAnnotateTextResponse>;
    /**
     * Classifies a document into categories.
     */
    languageDocumentsClassifyText(req: operations.LanguageDocumentsClassifyTextRequest, security: operations.LanguageDocumentsClassifyTextSecurity, config?: AxiosRequestConfig): Promise<operations.LanguageDocumentsClassifyTextResponse>;
}
