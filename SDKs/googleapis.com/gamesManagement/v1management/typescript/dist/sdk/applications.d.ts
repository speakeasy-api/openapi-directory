import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
     */
    gamesManagementApplicationsListHidden(req: operations.GamesManagementApplicationsListHiddenRequest, security: operations.GamesManagementApplicationsListHiddenSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementApplicationsListHiddenResponse>;
}
