import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OralQuestions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of oral questions
     *
     * @remarks
     * A list of oral questions meeting the specified criteria.
     */
    publishedOralQuestionGet(req: operations.PublishedOralQuestionGetRequest, config?: AxiosRequestConfig): Promise<operations.PublishedOralQuestionGetResponse>;
}
