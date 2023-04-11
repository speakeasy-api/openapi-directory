import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A health profile question contains a health question and the corresponding answer for a patient.
 */
export declare class HealthProfileQuestion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a health profile question
     *
     * @remarks
     * Get a health profile by id
     */
    fetchHealthProfileQuestion(req: operations.FetchHealthProfileQuestionRequest, config?: AxiosRequestConfig): Promise<operations.FetchHealthProfileQuestionResponse>;
    /**
     * List health profile questions
     *
     * @remarks
     * Get a list of health profile questions
     */
    fetchHealthProfileQuestions(req: operations.FetchHealthProfileQuestionsRequest, config?: AxiosRequestConfig): Promise<operations.FetchHealthProfileQuestionsResponse>;
}
