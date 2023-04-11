import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SubRoutes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get displayed attributes
     *
     * @remarks
     * Get displayed attributes
     */
    getDisplayedAttributes(config?: AxiosRequestConfig): Promise<operations.GetDisplayedAttributesResponse>;
    /**
     * Get distinct attribute
     *
     * @remarks
     * Get distinct attribute
     */
    getDistinctAttribute(config?: AxiosRequestConfig): Promise<operations.GetDistinctAttributeResponse>;
    /**
     * Get faceting
     *
     * @remarks
     * Get faceting
     */
    getFaceting(config?: AxiosRequestConfig): Promise<operations.GetFacetingResponse>;
    /**
     * Get filterable attributes
     *
     * @remarks
     * Get filterable attributes
     */
    getFilterableAttributes(config?: AxiosRequestConfig): Promise<operations.GetFilterableAttributesResponse>;
    /**
     * Get pagination
     *
     * @remarks
     * Get pagination
     */
    getPagination(config?: AxiosRequestConfig): Promise<operations.GetPaginationResponse>;
    /**
     * Get ranking rules
     *
     * @remarks
     * Get ranking rules
     */
    getRankingRules(config?: AxiosRequestConfig): Promise<operations.GetRankingRulesResponse>;
    /**
     * Get searchable attributes
     *
     * @remarks
     * Get searchable attributes
     */
    getSearchableAttributes(config?: AxiosRequestConfig): Promise<operations.GetSearchableAttributesResponse>;
    /**
     * Get sortable attributes
     *
     * @remarks
     * Get sortable attributes
     */
    getSortableAttributes(config?: AxiosRequestConfig): Promise<operations.GetSortableAttributesResponse>;
    /**
     * Get synonyms
     *
     * @remarks
     * Get synonyms
     */
    getSynonyms(config?: AxiosRequestConfig): Promise<operations.GetSynonymsResponse>;
    /**
     * Get typo-tolerance
     *
     * @remarks
     * Get typo-tolerance
     */
    getTypoTolerance(config?: AxiosRequestConfig): Promise<operations.GetTypoToleranceResponse>;
    /**
     * Reset displayed attributes
     *
     * @remarks
     * Reset displayed attributes
     */
    resetDisplayedAttributes(config?: AxiosRequestConfig): Promise<operations.ResetDisplayedAttributesResponse>;
    /**
     * Reset distinct attribute
     *
     * @remarks
     * Reset distinct attribute
     */
    resetDistinctAttribute(config?: AxiosRequestConfig): Promise<operations.ResetDistinctAttributeResponse>;
    /**
     * Reset faceting
     *
     * @remarks
     * Reset faceting
     */
    resetFaceting(config?: AxiosRequestConfig): Promise<operations.ResetFacetingResponse>;
    /**
     * Reset filterable attributes
     *
     * @remarks
     * Reset filterable attributes
     */
    resetFilterableAttributes(config?: AxiosRequestConfig): Promise<operations.ResetFilterableAttributesResponse>;
    /**
     * Reset pagination
     *
     * @remarks
     * Reset pagination
     */
    resetPagination(config?: AxiosRequestConfig): Promise<operations.ResetPaginationResponse>;
    /**
     * Reset ranking rules
     *
     * @remarks
     * Reset ranking rules
     */
    resetRankingRules(config?: AxiosRequestConfig): Promise<operations.ResetRankingRulesResponse>;
    /**
     * Reset searchable attributes
     *
     * @remarks
     * Reset searchable attributes
     */
    resetSearchableAttributes(config?: AxiosRequestConfig): Promise<operations.ResetSearchableAttributesResponse>;
    /**
     * Reset sortable attributes
     *
     * @remarks
     * Reset sortable attributes
     */
    resetSortableAttributes(config?: AxiosRequestConfig): Promise<operations.ResetSortableAttributesResponse>;
    /**
     * Reset stop-words
     *
     * @remarks
     * Reset stop-words
     */
    resetStopWords(config?: AxiosRequestConfig): Promise<operations.ResetStopWordsResponse>;
    /**
     * Reset synonyms
     *
     * @remarks
     * Reset synonyms
     */
    resetSynonyms(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.ResetSynonymsResponse>;
    /**
     * Reset typo-tolerance
     *
     * @remarks
     * Reset typo-tolerance
     */
    resetTypoTolerance(config?: AxiosRequestConfig): Promise<operations.ResetTypoToleranceResponse>;
    /**
     * Update displayed attributes
     *
     * @remarks
     * Update displayed attributes
     */
    updateDisplayedAttributes(req: string[], config?: AxiosRequestConfig): Promise<operations.UpdateDisplayedAttributesResponse>;
    /**
     * Update distinct attribute
     *
     * @remarks
     * Update distinct attribute
     */
    updateDistinctAttribute(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.UpdateDistinctAttributeResponse>;
    /**
     * Update faceting
     *
     * @remarks
     * Update faceting
     */
    updateFaceting(req: operations.UpdateFacetingRequestBody, config?: AxiosRequestConfig): Promise<operations.UpdateFacetingResponse>;
    /**
     * Update filterable attributes
     *
     * @remarks
     * Update filterable attributes
     */
    updateFilterableAttributes(req: string[], config?: AxiosRequestConfig): Promise<operations.UpdateFilterableAttributesResponse>;
    /**
     * Update pagination
     *
     * @remarks
     * Update pagination
     */
    updatePagination(req: operations.UpdatePaginationRequestBody, config?: AxiosRequestConfig): Promise<operations.UpdatePaginationResponse>;
    /**
     * Update ranking rules
     *
     * @remarks
     * Update ranking rules
     */
    updateRankingRules(req: string[], config?: AxiosRequestConfig): Promise<operations.UpdateRankingRulesResponse>;
    /**
     * Update searchable attributes
     *
     * @remarks
     * Update searchable attributes
     */
    updateSearchableAttributes(req: string[], config?: AxiosRequestConfig): Promise<operations.UpdateSearchableAttributesResponse>;
    /**
     * Update sortable attributes
     *
     * @remarks
     * Update sortable attributes
     */
    updateSortableAttributes(req: string[], config?: AxiosRequestConfig): Promise<operations.UpdateSortableAttributesResponse>;
    /**
     * Update stop-words
     *
     * @remarks
     * Update stop-words
     */
    updateStopWords(req: string[], config?: AxiosRequestConfig): Promise<operations.UpdateStopWordsResponse>;
    /**
     * Update synonyms
     *
     * @remarks
     * Update synonyms
     */
    updateSynonyms(req: operations.UpdateSynonymsRequestBody, config?: AxiosRequestConfig): Promise<operations.UpdateSynonymsResponse>;
    /**
     * Update typo-tolerance
     *
     * @remarks
     * Update typo-tolerance
     */
    updateTypoTolerance(req: operations.UpdateTypoToleranceRequestBody, config?: AxiosRequestConfig): Promise<operations.UpdateTypoToleranceResponse>;
}
