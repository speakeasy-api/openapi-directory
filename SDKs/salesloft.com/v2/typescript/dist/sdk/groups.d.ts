import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Group Management
 */
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List groups
     *
     * @remarks
     * Fetches multiple group records. The records can be filtered, and sorted according to
     * the respective parameters.
     *
     */
    getV2GroupsJson(req: operations.GetV2GroupsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2GroupsJsonResponse>;
    /**
     * Fetch a group
     *
     * @remarks
     * Fetches a group, by ID only.
     *
     */
    getV2GroupsIdJson(req: operations.GetV2GroupsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2GroupsIdJsonResponse>;
}
