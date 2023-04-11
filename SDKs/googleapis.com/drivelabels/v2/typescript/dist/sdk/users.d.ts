import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the user capabilities.
     */
    drivelabelsUsersGetCapabilities(req: operations.DrivelabelsUsersGetCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsUsersGetCapabilitiesResponse>;
}
