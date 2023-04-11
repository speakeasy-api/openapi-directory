import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     *  Adds a site to the set of the user's sites in Search Console.
     */
    webmastersSitesAdd(req: operations.WebmastersSitesAddRequest, security: operations.WebmastersSitesAddSecurity, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesAddResponse>;
    /**
     *  Removes a site from the set of the user's Search Console sites.
     */
    webmastersSitesDelete(req: operations.WebmastersSitesDeleteRequest, security: operations.WebmastersSitesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesDeleteResponse>;
    /**
     *  Retrieves information about specific site.
     */
    webmastersSitesGet(req: operations.WebmastersSitesGetRequest, security: operations.WebmastersSitesGetSecurity, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesGetResponse>;
    /**
     *  Lists the user's Search Console sites.
     */
    webmastersSitesList(req: operations.WebmastersSitesListRequest, security: operations.WebmastersSitesListSecurity, config?: AxiosRequestConfig): Promise<operations.WebmastersSitesListResponse>;
}
