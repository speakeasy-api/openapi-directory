import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Get media from user generated lists.
 */
export declare class UserMediaLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get UserMediaList by ID
     *
     * @remarks
     * Get a specific user media list.
     */
    getResourcesUserMediaListsIdJson(req: operations.GetResourcesUserMediaListsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesUserMediaListsIdJsonResponse>;
}
