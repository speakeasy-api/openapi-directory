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
     * BatchDeleteCatalogObjects
     *
     * @remarks
     * Deletes a set of [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)s based on the
     * provided list of target IDs and returns a set of successfully deleted IDs in
     * the response. Deletion is a cascading event such that all children of the
     * targeted object are also deleted. For example, deleting a CatalogItem will
     * also delete all of its [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
     * children.
     *
     * `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
     * IDs can be deleted. The response will only include IDs that were
     * actually deleted.
     */
    batchDeleteCatalogObjects(req: shared.BatchDeleteCatalogObjectsRequest, security: operations.BatchDeleteCatalogObjectsSecurity, config?: AxiosRequestConfig): Promise<operations.BatchDeleteCatalogObjectsResponse>;
    /**
     * BatchRetrieveCatalogObjects
     *
     * @remarks
     * Returns a set of objects based on the provided ID.
     * Each [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) returned in the set includes all of its
     * child information including: all of its
     * [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) objects, references to
     * its [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
     * any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.
     */
    batchRetrieveCatalogObjects(req: shared.BatchRetrieveCatalogObjectsRequest, security: operations.BatchRetrieveCatalogObjectsSecurity, config?: AxiosRequestConfig): Promise<operations.BatchRetrieveCatalogObjectsResponse>;
    /**
     * BatchUpsertCatalogObjects
     *
     * @remarks
     * Creates or updates up to 10,000 target objects based on the provided
     * list of objects. The target objects are grouped into batches and each batch is
     * inserted/updated in an all-or-nothing manner. If an object within a batch is
     * malformed in some way, or violates a database constraint, the entire batch
     * containing that item will be disregarded. However, other batches in the same
     * request may still succeed. Each batch may contain up to 1,000 objects, and
     * batches will be processed in order as long as the total object count for the
     * request (items, variations, modifier lists, discounts, and taxes) is no more
     * than 10,000.
     */
    batchUpsertCatalogObjects(req: shared.BatchUpsertCatalogObjectsRequest, security: operations.BatchUpsertCatalogObjectsSecurity, config?: AxiosRequestConfig): Promise<operations.BatchUpsertCatalogObjectsResponse>;
    /**
     * CatalogInfo
     *
     * @remarks
     * Retrieves information about the Square Catalog API, such as batch size
     * limits that can be used by the `BatchUpsertCatalogObjects` endpoint.
     */
    catalogInfo(config?: AxiosRequestConfig): Promise<operations.CatalogInfoResponse>;
    /**
     * DeleteCatalogObject
     *
     * @remarks
     * Deletes a single [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the
     * provided ID and returns the set of successfully deleted IDs in the response.
     * Deletion is a cascading event such that all children of the targeted object
     * are also deleted. For example, deleting a [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
     * will also delete all of its
     * [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation) children.
     */
    deleteCatalogObject(req: operations.DeleteCatalogObjectRequest, security: operations.DeleteCatalogObjectSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteCatalogObjectResponse>;
    /**
     * ListCatalog
     *
     * @remarks
     * Returns a list of [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s that includes
     * all objects of a set of desired types (for example, all [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
     * and [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects) in the catalog. The `types` parameter
     * is specified as a comma-separated list of valid [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) types:
     * `ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`.
     *
     * __Important:__ ListCatalog does not return deleted catalog items. To retrieve
     * deleted catalog items, use [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
     * and set the `include_deleted_objects` attribute value to `true`.
     */
    listCatalog(req: operations.ListCatalogRequest, security: operations.ListCatalogSecurity, config?: AxiosRequestConfig): Promise<operations.ListCatalogResponse>;
    /**
     * RetrieveCatalogObject
     *
     * @remarks
     * Returns a single [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) as a
     * [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) based on the provided ID. The returned
     * object includes all of the relevant [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem)
     * information including: [CatalogItemVariation](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItemVariation)
     * children, references to its
     * [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects, and the ids of
     * any [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to it.
     */
    retrieveCatalogObject(req: operations.RetrieveCatalogObjectRequest, security: operations.RetrieveCatalogObjectSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveCatalogObjectResponse>;
    /**
     * SearchCatalogItems
     *
     * @remarks
     * Searches for catalog items or item variations by matching supported search attribute values, including
     * custom attribute values, against one or more of the specified query expressions.
     *
     * This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects)
     * endpoint in the following aspects:
     *
     * - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
     * - `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
     * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
     * - The both endpoints use different call conventions, including the query filter formats.
     */
    searchCatalogItems(req: shared.SearchCatalogItemsRequest, security: operations.SearchCatalogItemsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchCatalogItemsResponse>;
    /**
     * SearchCatalogObjects
     *
     * @remarks
     * Searches for [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) of any type by matching supported search attribute values,
     * excluding custom attribute values on items or item variations, against one or more of the specified query expressions.
     *
     * This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items)
     * endpoint in the following aspects:
     *
     * - `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
     * - `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
     * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
     * - The both endpoints have different call conventions, including the query filter formats.
     */
    searchCatalogObjects(req: shared.SearchCatalogObjectsRequest, security: operations.SearchCatalogObjectsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchCatalogObjectsResponse>;
    /**
     * UpdateItemModifierLists
     *
     * @remarks
     * Updates the [CatalogModifierList](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogModifierList) objects
     * that apply to the targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having
     * to perform an upsert on the entire item.
     */
    updateItemModifierLists(req: shared.UpdateItemModifierListsRequest, security: operations.UpdateItemModifierListsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateItemModifierListsResponse>;
    /**
     * UpdateItemTaxes
     *
     * @remarks
     * Updates the [CatalogTax](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogTax) objects that apply to the
     * targeted [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) without having to perform an
     * upsert on the entire item.
     */
    updateItemTaxes(req: shared.UpdateItemTaxesRequest, security: operations.UpdateItemTaxesSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateItemTaxesResponse>;
    /**
     * UpsertCatalogObject
     *
     * @remarks
     * Creates or updates the target [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject).
     */
    upsertCatalogObject(req: shared.UpsertCatalogObjectRequest, security: operations.UpsertCatalogObjectSecurity, config?: AxiosRequestConfig): Promise<operations.UpsertCatalogObjectResponse>;
}
