import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Crm Users
 */
export declare class CrmUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List crm users
     *
     * @remarks
     * Crm Users
     *
     */
    getV2CrmUsersJson(req: operations.GetV2CrmUsersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CrmUsersJsonResponse>;
}
