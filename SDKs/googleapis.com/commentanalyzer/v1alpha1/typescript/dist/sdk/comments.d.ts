import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Comments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Analyzes the provided text and returns scores for requested attributes.
     */
    commentanalyzerCommentsAnalyze(req: operations.CommentanalyzerCommentsAnalyzeRequest, security: operations.CommentanalyzerCommentsAnalyzeSecurity, config?: AxiosRequestConfig): Promise<operations.CommentanalyzerCommentsAnalyzeResponse>;
    /**
     * Suggest comment scores as training data.
     */
    commentanalyzerCommentsSuggestscore(req: operations.CommentanalyzerCommentsSuggestscoreRequest, security: operations.CommentanalyzerCommentsSuggestscoreSecurity, config?: AxiosRequestConfig): Promise<operations.CommentanalyzerCommentsSuggestscoreResponse>;
}
