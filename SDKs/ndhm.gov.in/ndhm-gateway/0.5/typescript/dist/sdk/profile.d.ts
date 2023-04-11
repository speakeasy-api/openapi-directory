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
     * Response to patient's share profile request
     *
     * @remarks
     * Result of patient share profile request at HIP end.
     *
     */
    postV05PatientsProfileOnShareJson(req: operations.PostV05PatientsProfileOnShareJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileOnShareJsonResponse>;
    /**
     * Response to patient's share profile request
     *
     * @remarks
     * Result of patient share profile request at HIP end.
     *
     */
    postV05PatientsProfileOnShareRaw(req: operations.PostV05PatientsProfileOnShareRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileOnShareRawResponse>;
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
