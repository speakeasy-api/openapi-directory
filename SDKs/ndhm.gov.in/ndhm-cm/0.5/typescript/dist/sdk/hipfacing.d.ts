import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class HipFacing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a patient's authentication modes relevant to specified purpose
     *
     * @remarks
     * This API is meant for identify supported authentication modes for a patient given a specific purpose
     *
     */
    postV05UsersAuthFetchModesJson(req: operations.PostV05UsersAuthFetchModesJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthFetchModesJsonResponse>;
    /**
     * Get a patient's authentication modes relevant to specified purpose
     *
     * @remarks
     * This API is meant for identify supported authentication modes for a patient given a specific purpose
     *
     */
    postV05UsersAuthFetchModesRaw(req: operations.PostV05UsersAuthFetchModesRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthFetchModesRawResponse>;
    /**
     * callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
     *
     * @remarks
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
     */
    postV05UsersAuthOnNotifyJson(req: operations.PostV05UsersAuthOnNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyJsonResponse>;
    /**
     * callback API from HIU/HIPs as acknowledgement of auth notification (in case of DIRECT auth)
     *
     * @remarks
     * This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication.
     *
     */
    postV05UsersAuthOnNotifyRaw(req: operations.PostV05UsersAuthOnNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05UsersAuthOnNotifyRawResponse>;
}
