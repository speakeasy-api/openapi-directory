import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class HipFacing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postV05UsersAuthFetchModes - Get a patient's authentication modes relevant to specified purpose
     *
     * This API is meant for identify supported authentication modes for a patient given a specific purpose
     *
    **/
    postV05UsersAuthFetchModes(req: operations.PostV05UsersAuthFetchModesRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthFetchModesResponse>;
    /**
     * postV05UsersAuthOnNotify - callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
     *
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
    **/
    postV05UsersAuthOnNotify(req: operations.PostV05UsersAuthOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyResponse>;
}
