import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the client details in an organization
     *
     * @remarks
     * Return the client details in an organization
     */
    getOrganizationClientsSearch(req: operations.GetOrganizationClientsSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsSearchResponse>;
}
