import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Profile {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05PatientsProfileOnShare - Response to patient's share profile request
     *
     * Result of patient share profile request at HIP end.
     *
    **/
    postV05PatientsProfileOnShare(req: operations.PostV05PatientsProfileOnShareRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileOnShareResponse>;
    /**
     * postV05PatientsProfileShare - Share patient profile details
     *
     * Request for sharing patient's profile details to HIP
     *
    **/
    postV05PatientsProfileShare(req: operations.PostV05PatientsProfileShareRequest, config?: AxiosRequestConfig): Promise<operations.PostV05PatientsProfileShareResponse>;
}
