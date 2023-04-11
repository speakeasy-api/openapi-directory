import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Profile {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Share patient profile details
     *
     * @remarks
     * Request for sharing patient's profile details to HIP
     *
     */
    postV05PatientsProfileShareJson(req: operations.PostV05PatientsProfileShareJsonRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileShareJsonResponse>;
    /**
     * Share patient profile details
     *
     * @remarks
     * Request for sharing patient's profile details to HIP
     *
     */
    postV05PatientsProfileShareRaw(req: operations.PostV05PatientsProfileShareRawRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileShareRawResponse>;
}
