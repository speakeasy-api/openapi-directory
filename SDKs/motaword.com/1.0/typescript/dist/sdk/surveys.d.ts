import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Surveys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get survey questions in given scope and type
     *
     * @remarks
     * Get survey questions in given scope and type
     */
    getQuestions(req: operations.GetQuestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetQuestionsResponse>;
    /**
     * Post survey answers for scope and type
     *
     * @remarks
     * Post survey answers for scope and type
     */
    submitAnswers(req: operations.SubmitAnswersRequest, config?: AxiosRequestConfig): Promise<operations.SubmitAnswersResponse>;
}
