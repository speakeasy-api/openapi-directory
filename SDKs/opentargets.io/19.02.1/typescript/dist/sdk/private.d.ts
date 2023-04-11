import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Unstable API methods. Subject to change without prior notice. Use at your own risk.
 */
export declare class Private {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Browse API documentation
     *
     * @remarks
     * Access api docs as served by Redoc
     */
    getApiDocs(config?: AxiosRequestConfig): Promise<operations.GetApiDocsResponse>;
    /**
     * Browse interactive API documentation
     *
     * @remarks
     * Interactive API docs using swagger-ui
     */
    getApiSwaggerUI(config?: AxiosRequestConfig): Promise<operations.GetApiSwaggerUIResponse>;
    /**
     * Get `autocomplete` objects.
     *
     * @remarks
     * Search for the closest term to autocomplete in the search box.
     *
     */
    getAutocomplete(req: operations.GetAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetAutocompleteResponse>;
    /**
     * Find information about a disease
     *
     * @remarks
     * Get `disease` objects.
     *
     */
    getDiseaseById(req: operations.GetDiseaseByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDiseaseByIdResponse>;
    /**
     * Get drug by ID
     *
     * @remarks
     * Get `drug` objects.
     *
     */
    getDrugByID(req: operations.GetDrugByIDRequest, config?: AxiosRequestConfig): Promise<operations.GetDrugByIDResponse>;
    /**
     * Get evidence code by ID
     *
     * @remarks
     * Get `ECO` objects.
     *
     */
    getECObyID(req: operations.GetECObyIDRequest, config?: AxiosRequestConfig): Promise<operations.GetECObyIDResponse>;
    /**
     * Search most relevant results
     *
     * @remarks
     * Get `search-result` objects. Enables search bar functionality.
     *
     */
    getQuickSearch(req: operations.GetQuickSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetQuickSearchResponse>;
    /**
     * Find related entities by disease
     *
     * @remarks
     * Get `relation` objects starting from diseases.
     *
     */
    getRelationByEFOID(req: operations.GetRelationByEFOIDRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationByEFOIDResponse>;
    /**
     * Find related entities by target
     *
     * @remarks
     * Get `relation` objects starting from diseases.
     *
     */
    getRelationByENSGID(req: operations.GetRelationByENSGIDRequest, config?: AxiosRequestConfig): Promise<operations.GetRelationByENSGIDResponse>;
    /**
     * Get OpenAPI schema
     *
     * @remarks
     * Get swagger.yaml specs for the API
     */
    getSwagger(config?: AxiosRequestConfig): Promise<operations.GetSwaggerResponse>;
    /**
     * Find information about a target
     *
     * @remarks
     * Get `target` objects.
     *
     */
    getTargetByENSGID(req: operations.GetTargetByENSGIDRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetByENSGIDResponse>;
    /**
     * Query expression levels
     *
     * @remarks
     * Get `gene-expression` objects.
     *
     */
    getTargetExpressionByENSGID(req: operations.GetTargetExpressionByENSGIDRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetExpressionByENSGIDResponse>;
    /**
     * Find the best hit
     *
     * @remarks
     * Fire the search method for multiple strings
     *
     */
    postBestHitSearch(req: string, config?: AxiosRequestConfig): Promise<operations.PostBestHitSearchResponse>;
    /**
     * Find information about a list of diseases
     *
     * @remarks
     * Get `disease` objects.
     *
     */
    postDiseaseById(req: string, config?: AxiosRequestConfig): Promise<operations.PostDiseaseByIdResponse>;
    /**
     * Enrichment analysis
     *
     * @remarks
     * Returns an enrichment analysis for a list of targets passed in the body
     *
     */
    postEnrichmentTarget(req: string, config?: AxiosRequestConfig): Promise<operations.PostEnrichmentTargetResponse>;
    /**
     * Find related entities
     *
     * @remarks
     * Get `relation` objects.
     *
     */
    postRelation(req: string, config?: AxiosRequestConfig): Promise<operations.PostRelationResponse>;
    /**
     * Find information about a list of targets
     *
     * @remarks
     * Get `target` objects. Used for the target profile page.
     *
     */
    postTargetByENSGID(req: string, config?: AxiosRequestConfig): Promise<operations.PostTargetByENSGIDResponse>;
    /**
     * Batch query expression levels
     *
     * @remarks
     * Get `gene-expression` objects.
     *
     */
    postTargetExpressionByENSGID(req: string, config?: AxiosRequestConfig): Promise<operations.PostTargetExpressionByENSGIDResponse>;
}
