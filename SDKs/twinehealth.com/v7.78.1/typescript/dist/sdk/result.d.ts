import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A patient health result is a quantitative result for a patient.
 */
export declare class Result {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a patient health result
     *
     * @remarks
     * Get patient health result by id.
     */
    fetchPatientHealthResult(req: operations.FetchPatientHealthResultRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientHealthResultResponse>;
    /**
     * List patient health results
     *
     * @remarks
     * Get a list of patient health results.
     */
    fetchPatientHealthResults(req: operations.FetchPatientHealthResultsRequest, config?: AxiosRequestConfig): Promise<operations.FetchPatientHealthResultsResponse>;
}
