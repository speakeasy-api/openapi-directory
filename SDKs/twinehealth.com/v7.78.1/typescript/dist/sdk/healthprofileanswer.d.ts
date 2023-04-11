import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A health profile answer is the answer to a question for a patient.
 */
export declare class HealthProfileAnswer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a health profile answer
     *
     * @remarks
     * Get a health profile answer by id
     */
    fetchHealthProfileAnswer(req: operations.FetchHealthProfileAnswerRequest, config?: AxiosRequestConfig): Promise<operations.FetchHealthProfileAnswerResponse>;
    /**
     * List health profile answers
     *
     * @remarks
     * Get a list of health profile answers
     */
    fetchHealthProfileAnswers(req: operations.FetchHealthProfileAnswersRequest, config?: AxiosRequestConfig): Promise<operations.FetchHealthProfileAnswersResponse>;
}
