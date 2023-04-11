import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Resources that manage image examples.
 */
export declare class VisionExamples {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an Example
     *
     * @remarks
     * Adds an example with the specified label to a dataset.
     */
    addExample(req: operations.AddExampleRequest, security: operations.AddExampleSecurity, config?: AxiosRequestConfig): Promise<operations.AddExampleResponse>;
    /**
     * Get All Examples for Label
     *
     * @remarks
     * Returns all the examples for the specified label. Returns both uploaded examples and feedback examples.
     */
    getExamplesByLabel1(req: operations.GetExamplesByLabel1Request, security: operations.GetExamplesByLabel1Security, config?: AxiosRequestConfig): Promise<operations.GetExamplesByLabel1Response>;
    /**
     * Get All Examples
     *
     * @remarks
     * Returns all the examples for the specified dataset. By default, returns examples created by uploading them from a .zip file.
     */
    getExamples1(req: operations.GetExamples1Request, security: operations.GetExamples1Security, config?: AxiosRequestConfig): Promise<operations.GetExamples1Response>;
    /**
     * Create a Feedback Example
     *
     * @remarks
     * Adds a feedback example to the dataset associated with the specified model.
     */
    provideFeedback1(req: operations.ProvideFeedback1RequestBody, security: operations.ProvideFeedback1Security, config?: AxiosRequestConfig): Promise<operations.ProvideFeedback1Response>;
    /**
     * Create Feedback Examples From a Zip File
     *
     * @remarks
     * Adds feedback examples to the dataset associated with the specified object detection model.
     */
    updateDatasetAsync1(req: operations.UpdateDatasetAsync1RequestBody, security: operations.UpdateDatasetAsync1Security, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsync1Response>;
    /**
     * Create Examples From a Zip File
     *
     * @remarks
     * Adds examples from a .zip file to a dataset. You can use this call only with a dataset that was created from a .zip file.
     */
    updateDatasetAsync2(req: operations.UpdateDatasetAsync2Request, security: operations.UpdateDatasetAsync2Security, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetAsync2Response>;
}
