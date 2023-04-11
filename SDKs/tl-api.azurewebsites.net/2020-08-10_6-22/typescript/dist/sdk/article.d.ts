import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Article {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add measure unit
     */
    articleAddMeasureUnit(req: shared.MeasureUnitDTO[], config?: AxiosRequestConfig): Promise<operations.ArticleAddMeasureUnitResponse>;
    /**
     * Delete article from the system
     *
     */
    articleDelete(req: operations.ArticleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ArticleDeleteResponse>;
    articleGetAddons(req: operations.ArticleGetAddonsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetAddonsResponse>;
    /**
     * Get mesure units
     */
    articleGetMeasureUnits(req: operations.ArticleGetMeasureUnitsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetMeasureUnitsResponse>;
    /**
     * Get Revenue Accounts
     */
    articleGetRevenueAccounts(config?: AxiosRequestConfig): Promise<operations.ArticleGetRevenueAccountsResponse>;
    /**
     * Get Gym specific properties for article
     *
     */
    articleGymArticleDetails(req: operations.ArticleGymArticleDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGymArticleDetailsResponse>;
    /**
     * Add new article
     *
     */
    articlePost(req: shared.ArticleDTO, config?: AxiosRequestConfig): Promise<operations.ArticlePostResponse>;
    /**
     * update existing article
     *
     */
    articlePut(req: shared.ArticleDTO, config?: AxiosRequestConfig): Promise<operations.ArticlePutResponse>;
    /**
     * Search articles
     * It will only return basic information of article
     *
     */
    articleSearch(req: operations.ArticleSearchRequest, config?: AxiosRequestConfig): Promise<operations.ArticleSearchResponse>;
    /**
     * Add article details that associate with a Gym
     *
     */
    articleUpdateArticleGymDetails(req: shared.GymArticleDetailsDTO[], config?: AxiosRequestConfig): Promise<operations.ArticleUpdateArticleGymDetailsResponse>;
    /**
     * Deactivate existing article
     */
    articleUpdateStatus(req: operations.ArticleUpdateStatusRequest, config?: AxiosRequestConfig): Promise<operations.ArticleUpdateStatusResponse>;
    /**
     * Get article details
     * This will return all properties related to article entity
     *
     */
    articleGet(req: operations.ArticleGetRequest, config?: AxiosRequestConfig): Promise<operations.ArticleGetResponse>;
}
