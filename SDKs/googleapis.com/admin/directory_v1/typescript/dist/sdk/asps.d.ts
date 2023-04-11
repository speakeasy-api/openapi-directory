import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Asps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an ASP issued by a user.
     */
    directoryAspsDelete(req: operations.DirectoryAspsDeleteRequest, security: operations.DirectoryAspsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryAspsDeleteResponse>;
    /**
     * Gets information about an ASP issued by a user.
     */
    directoryAspsGet(req: operations.DirectoryAspsGetRequest, security: operations.DirectoryAspsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryAspsGetResponse>;
    /**
     * Lists the ASPs issued by a user.
     */
    directoryAspsList(req: operations.DirectoryAspsListRequest, security: operations.DirectoryAspsListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryAspsListResponse>;
}
