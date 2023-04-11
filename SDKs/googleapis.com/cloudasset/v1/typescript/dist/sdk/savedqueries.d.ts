import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SavedQueries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a saved query in a parent project/folder/organization.
     */
    cloudassetSavedQueriesCreate(req: operations.CloudassetSavedQueriesCreateRequest, security: operations.CloudassetSavedQueriesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesCreateResponse>;
    /**
     * Deletes a saved query.
     */
    cloudassetSavedQueriesDelete(req: operations.CloudassetSavedQueriesDeleteRequest, security: operations.CloudassetSavedQueriesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesDeleteResponse>;
    /**
     * Gets details about a saved query.
     */
    cloudassetSavedQueriesGet(req: operations.CloudassetSavedQueriesGetRequest, security: operations.CloudassetSavedQueriesGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesGetResponse>;
    /**
     * Lists all saved queries in a parent project/folder/organization.
     */
    cloudassetSavedQueriesList(req: operations.CloudassetSavedQueriesListRequest, security: operations.CloudassetSavedQueriesListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesListResponse>;
    /**
     * Updates a saved query.
     */
    cloudassetSavedQueriesPatch(req: operations.CloudassetSavedQueriesPatchRequest, security: operations.CloudassetSavedQueriesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetSavedQueriesPatchResponse>;
}
