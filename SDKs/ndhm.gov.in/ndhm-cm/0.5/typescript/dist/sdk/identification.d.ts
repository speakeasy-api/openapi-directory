import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Identification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Identify a patient by her consent-manager user-id
     *
     * @remarks
     * This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results.
     *
     */
    postV05PatientsFindJson(req: operations.PostV05PatientsFindJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsFindJsonResponse>;
    /**
     * Identify a patient by her consent-manager user-id
     *
     * @remarks
     * This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results.
     *
     */
    postV05PatientsFindRaw(req: operations.PostV05PatientsFindRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsFindRawResponse>;
}
