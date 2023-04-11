import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Conversionsources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new conversion source.
     */
    contentConversionsourcesCreate(req: operations.ContentConversionsourcesCreateRequest, security: operations.ContentConversionsourcesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentConversionsourcesCreateResponse>;
    /**
     * Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.
     */
    contentConversionsourcesDelete(req: operations.ContentConversionsourcesDeleteRequest, security: operations.ContentConversionsourcesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentConversionsourcesDeleteResponse>;
    /**
     * Fetches a conversion source.
     */
    contentConversionsourcesGet(req: operations.ContentConversionsourcesGetRequest, security: operations.ContentConversionsourcesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentConversionsourcesGetResponse>;
    /**
     * Retrieves the list of conversion sources the caller has access to.
     */
    contentConversionsourcesList(req: operations.ContentConversionsourcesListRequest, security: operations.ContentConversionsourcesListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentConversionsourcesListResponse>;
    /**
     * Updates information of an existing conversion source.
     */
    contentConversionsourcesPatch(req: operations.ContentConversionsourcesPatchRequest, security: operations.ContentConversionsourcesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentConversionsourcesPatchResponse>;
    /**
     * Re-enables an archived conversion source.
     */
    contentConversionsourcesUndelete(req: operations.ContentConversionsourcesUndeleteRequest, security: operations.ContentConversionsourcesUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentConversionsourcesUndeleteResponse>;
}
