import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Identification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05PatientsFind - Identify a patient by her consent-manager user-id
     *
     * This API is meant for identify to patient given her consent-manager-user-id. CM subsequently makes the /on-find Gateway API call with results.
     *
    **/
    postV05PatientsFind(req: operations.PostV05PatientsFindRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsFindResponse>;
}
