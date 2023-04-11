import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Debug {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
     */
    cloudsearchDebugDatasourcesItemsCheckAccess(req: operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest, security: operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchDebugDatasourcesItemsCheckAccessResponse>;
    /**
     * Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
     */
    cloudsearchDebugDatasourcesItemsSearchByViewUrl(req: operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlRequest, security: operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchDebugDatasourcesItemsSearchByViewUrlResponse>;
    /**
     * Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
     */
    cloudsearchDebugIdentitysourcesItemsListForunmappedidentity(req: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest, security: operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse>;
    /**
     * Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
     */
    cloudsearchDebugIdentitysourcesUnmappedidsList(req: operations.CloudsearchDebugIdentitysourcesUnmappedidsListRequest, security: operations.CloudsearchDebugIdentitysourcesUnmappedidsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsearchDebugIdentitysourcesUnmappedidsListResponse>;
}
