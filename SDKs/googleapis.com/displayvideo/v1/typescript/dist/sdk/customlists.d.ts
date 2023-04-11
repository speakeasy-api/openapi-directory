import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a custom list.
     */
    displayvideoCustomListsGet(req: operations.DisplayvideoCustomListsGetRequest, security: operations.DisplayvideoCustomListsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomListsGetResponse>;
    /**
     * Lists custom lists. The order is defined by the order_by parameter.
     */
    displayvideoCustomListsList(req: operations.DisplayvideoCustomListsListRequest, security: operations.DisplayvideoCustomListsListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCustomListsListResponse>;
}
