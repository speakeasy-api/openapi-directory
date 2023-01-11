import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CreatorRoles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * creatorRolesList - Get a list of creator positions (jobs).
    **/
    creatorRolesList(req: operations.CreatorRolesListRequest, config?: AxiosRequestConfig): Promise<operations.CreatorRolesListResponse>;
}
