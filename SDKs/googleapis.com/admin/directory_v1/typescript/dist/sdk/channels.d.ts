import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Channels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Stops watching resources through this channel.
     */
    adminChannelsStop(req: operations.AdminChannelsStopRequest, security: operations.AdminChannelsStopSecurity, config?: AxiosRequestConfig): Promise<operations.AdminChannelsStopResponse>;
}
