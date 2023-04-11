import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Catalog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add items to catalog collections
     *
     * @remarks
     * This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.
     */
    addToCollection(req: operations.AddToCollectionRequest, security: operations.AddToCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.AddToCollectionResponse>;
    /**
     * Create catalog collections
     *
     * @remarks
     * This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.
     */
    createCollection(req: shared.CreateCatalogCollection, security: operations.CreateCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCollectionResponse>;
    /**
     * Delete catalog collections
     *
     * @remarks
     * This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.
     */
    deleteCollection(req: operations.DeleteCollectionRequest, security: operations.DeleteCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCollectionResponse>;
    /**
     * Remove items from catalog collection
     *
     * @remarks
     * This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.
     */
    deleteFromCollection(req: operations.DeleteFromCollectionRequest, security: operations.DeleteFromCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteFromCollectionResponse>;
    /**
     * List catalog collections
     *
     * @remarks
     * This endpoint returns a list of catalog collections.
     */
    getCollections(req: operations.GetCollectionsRequest, security: operations.GetCollectionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCollectionsResponse>;
    /**
     * Search catalogs for assets
     *
     * @remarks
     * This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     */
    searchCatalog(req: operations.SearchCatalogRequest, security: operations.SearchCatalogSecurity, config?: AxiosRequestConfig): Promise<operations.SearchCatalogResponse>;
    /**
     * Update collection metadata
     *
     * @remarks
     * This endpoint updates the metadata of a catalog collection.
     */
    updateCollection(req: operations.UpdateCollectionRequest, security: operations.UpdateCollectionSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCollectionResponse>;
}
