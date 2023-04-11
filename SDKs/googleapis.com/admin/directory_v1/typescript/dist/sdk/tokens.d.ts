import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tokens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes all access tokens issued by a user for an application.
     */
    directoryTokensDelete(req: operations.DirectoryTokensDeleteRequest, security: operations.DirectoryTokensDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryTokensDeleteResponse>;
    /**
     * Gets information about an access token issued by a user.
     */
    directoryTokensGet(req: operations.DirectoryTokensGetRequest, security: operations.DirectoryTokensGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryTokensGetResponse>;
    /**
     * Returns the set of tokens specified user has issued to 3rd party applications.
     */
    directoryTokensList(req: operations.DirectoryTokensListRequest, security: operations.DirectoryTokensListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryTokensListResponse>;
}
