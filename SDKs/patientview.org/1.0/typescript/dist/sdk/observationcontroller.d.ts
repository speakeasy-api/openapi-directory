import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Observation Controller
 */
export declare class ObservationController {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Observations of a Certain Type For a User
     *
     * @remarks
     * Given a User ID and observation code, retrieve all observations.
     */
    getObservationsByCode(req: operations.GetObservationsByCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetObservationsByCodeResponse>;
    /**
     * Get Observations of Multiple Types For a User
     *
     * @remarks
     * Given a User ID and search parameters, retrieve a page of observations.
     */
    getObservationsByCodes(req: operations.GetObservationsByCodesRequest, config?: AxiosRequestConfig): Promise<operations.GetObservationsByCodesResponse>;
    /**
     * Get patient entered Observations of a Certain Type For a User
     *
     * @remarks
     * Given a User ID and observation code, retrieve patient entered observations.
     */
    getPatientEnteredObservationsByCode(req: operations.GetPatientEnteredObservationsByCodeRequest, config?: AxiosRequestConfig): Promise<operations.GetPatientEnteredObservationsByCodeResponse>;
}
