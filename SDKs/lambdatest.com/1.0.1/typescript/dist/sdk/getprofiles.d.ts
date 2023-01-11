import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GetProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * profiles - Fetch login profiles
     *
     * Fetch login profiles
    **/
    profiles(req: operations.ProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ProfilesResponse>;
}
