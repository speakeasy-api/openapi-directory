import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information about tags
 */
export declare class Tags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Tags
     *
     * @remarks
     * List of Tags
     */
    getResourcesTagsFormat(req: operations.GetResourcesTagsFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsFormatResponse>;
    /**
     * Get TagLanguages
     *
     * @remarks
     * List of Tag Languages
     */
    getResourcesTagsTagLanguagesFormat(req: operations.GetResourcesTagsTagLanguagesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsTagLanguagesFormatResponse>;
    /**
     * Get MediaItems for Tag
     *
     * @remarks
     * List of Types
     */
    getResourcesTagsTagTypesFormat(req: operations.GetResourcesTagsTagTypesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsTagTypesFormatResponse>;
    /**
     * Get Tag by ID
     *
     * @remarks
     * Information about a specific tag
     */
    getResourcesTagsIdFormat(req: operations.GetResourcesTagsIdFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdFormatResponse>;
    /**
     * Get MediaItems for Tag
     *
     * @remarks
     * MediaItem
     */
    getResourcesTagsIdMediaFormat(req: operations.GetResourcesTagsIdMediaFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdMediaFormatResponse>;
    /**
     * Get related Tags by ID
     *
     * @remarks
     * Information about related tags to a specific tag
     */
    getResourcesTagsIdRelatedFormat(req: operations.GetResourcesTagsIdRelatedFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdRelatedFormatResponse>;
    /**
     * Get MediaItems for Tag
     *
     * @remarks
     * MediaItem
     */
    getResourcesTagsIdSyndicateFormat(req: operations.GetResourcesTagsIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesTagsIdSyndicateFormatResponse>;
}
