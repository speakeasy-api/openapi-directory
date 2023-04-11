import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ContentCategories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes an existing content category.
     */
    dfareportingContentCategoriesDelete(req: operations.DfareportingContentCategoriesDeleteRequest, security: operations.DfareportingContentCategoriesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesDeleteResponse>;
    /**
     * Gets one content category by ID.
     */
    dfareportingContentCategoriesGet(req: operations.DfareportingContentCategoriesGetRequest, security: operations.DfareportingContentCategoriesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesGetResponse>;
    /**
     * Inserts a new content category.
     */
    dfareportingContentCategoriesInsert(req: operations.DfareportingContentCategoriesInsertRequest, security: operations.DfareportingContentCategoriesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesInsertResponse>;
    /**
     * Retrieves a list of content categories, possibly filtered. This method supports paging.
     */
    dfareportingContentCategoriesList(req: operations.DfareportingContentCategoriesListRequest, security: operations.DfareportingContentCategoriesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesListResponse>;
    /**
     * Updates an existing content category. This method supports patch semantics.
     */
    dfareportingContentCategoriesPatch(req: operations.DfareportingContentCategoriesPatchRequest, security: operations.DfareportingContentCategoriesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesPatchResponse>;
    /**
     * Updates an existing content category.
     */
    dfareportingContentCategoriesUpdate(req: operations.DfareportingContentCategoriesUpdateRequest, security: operations.DfareportingContentCategoriesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingContentCategoriesUpdateResponse>;
}
