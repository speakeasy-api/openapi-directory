import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Regions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a region definition in your Merchant Center account.
     */
    contentRegionsCreate(req: operations.ContentRegionsCreateRequest, security: operations.ContentRegionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentRegionsCreateResponse>;
    /**
     * Deletes a region definition from your Merchant Center account.
     */
    contentRegionsDelete(req: operations.ContentRegionsDeleteRequest, security: operations.ContentRegionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentRegionsDeleteResponse>;
    /**
     * Retrieves a region defined in your Merchant Center account.
     */
    contentRegionsGet(req: operations.ContentRegionsGetRequest, security: operations.ContentRegionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentRegionsGetResponse>;
    /**
     * Lists the regions in your Merchant Center account.
     */
    contentRegionsList(req: operations.ContentRegionsListRequest, security: operations.ContentRegionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentRegionsListResponse>;
    /**
     * Updates a region definition in your Merchant Center account.
     */
    contentRegionsPatch(req: operations.ContentRegionsPatchRequest, security: operations.ContentRegionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentRegionsPatchResponse>;
}
