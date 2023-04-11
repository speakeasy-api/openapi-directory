import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TagKeys {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new TagKey. If another request with the same parameters is sent while the original request is in process, the second request will receive an error. A maximum of 1000 TagKeys can exist under a parent at any given time.
     */
    cloudresourcemanagerTagKeysCreate(req: operations.CloudresourcemanagerTagKeysCreateRequest, security: operations.CloudresourcemanagerTagKeysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagKeysCreateResponse>;
    /**
     * Lists all TagKeys for a parent resource.
     */
    cloudresourcemanagerTagKeysList(req: operations.CloudresourcemanagerTagKeysListRequest, security: operations.CloudresourcemanagerTagKeysListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagKeysListResponse>;
}
