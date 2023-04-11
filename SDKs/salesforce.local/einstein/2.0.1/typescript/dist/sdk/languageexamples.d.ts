import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that manage text examples.
 */
export declare class LanguageExamples {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get All Examples
     *
     * @remarks
     * Returns all the examples for the specified dataset,
     */
    getExamples(req: operations.GetExamplesRequest, security: operations.GetExamplesSecurity, config?: AxiosRequestConfig): Promise<operations.GetExamplesResponse>;
    /**
     * Get All Examples for Label
     *
     * @remarks
     * Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
     */
    getExamplesByLabel(req: operations.GetExamplesByLabelRequest, security: operations.GetExamplesByLabelSecurity, config?: AxiosRequestConfig): Promise<operations.GetExamplesByLabelResponse>;
    /**
     * Create a Feedback Example
     *
     * @remarks
     * Adds a feedback example to the dataset associated with the specified model.
     */
    provideFeedback(req: operations.ProvideFeedbackRequestBody, security: operations.ProvideFeedbackSecurity, config?: AxiosRequestConfig): Promise<operations.ProvideFeedbackResponse>;
    /**
     * Create Examples From a File
     *
     * @remarks
     * Adds examples from a .csv, .tsv, or .json file to a dataset.
     */
    updateDatasetAsync(req: operations.UpdateDatasetAsyncRequest, security: operations.UpdateDatasetAsyncSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsyncResponse>;
}
