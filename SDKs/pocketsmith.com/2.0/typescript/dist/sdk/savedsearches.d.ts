import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SavedSearches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List saved searches in user
     *
     * @remarks
     * Lists saved searches belonging to a user by their ID.
     */
    getUsersIdSavedSearches(req: operations.GetUsersIdSavedSearchesRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdSavedSearchesResponse>;
}
