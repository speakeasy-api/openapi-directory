import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Inventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * BatchChangeInventory
     *
     * @remarks
     * Applies adjustments and counts to the provided item quantities.
     *
     * On success: returns the current calculated counts for all objects
     * referenced in the request.
     * On failure: returns a list of related errors.
     */
    batchChangeInventory(req: shared.BatchChangeInventoryRequest, security: operations.BatchChangeInventorySecurity, config?: AxiosRequestConfig): Promise<operations.BatchChangeInventoryResponse>;
    /**
     * BatchRetrieveInventoryChanges
     *
     * @remarks
     * Returns historical physical counts and adjustments based on the
     * provided filter criteria.
     *
     * Results are paginated and sorted in ascending order according their
     * `occurred_at` timestamp (oldest first).
     *
     * BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
     * that cannot be handled by other, simpler endpoints.
     */
    batchRetrieveInventoryChanges(req: shared.BatchRetrieveInventoryChangesRequest, security: operations.BatchRetrieveInventoryChangesSecurity, config?: AxiosRequestConfig): Promise<operations.BatchRetrieveInventoryChangesResponse>;
    /**
     * BatchRetrieveInventoryCounts
     *
     * @remarks
     * Returns current counts for the provided
     * [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject)s at the requested
     * [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s.
     *
     * Results are paginated and sorted in descending order according to their
     * `calculated_at` timestamp (newest first).
     *
     * When `updated_after` is specified, only counts that have changed since that
     * time (based on the server timestamp for the most recent change) are
     * returned. This allows clients to perform a "sync" operation, for example
     * in response to receiving a Webhook notification.
     */
    batchRetrieveInventoryCounts(req: shared.BatchRetrieveInventoryCountsRequest, security: operations.BatchRetrieveInventoryCountsSecurity, config?: AxiosRequestConfig): Promise<operations.BatchRetrieveInventoryCountsResponse>;
    /**
     * DeprecatedBatchChangeInventory
     *
     * @remarks
     * Deprecated version of [BatchChangeInventory](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-change-inventory) after the endpoint URL
     * is updated to conform to the standard convention.
     */
    deprecatedBatchChangeInventory(req: shared.BatchChangeInventoryRequest, security: operations.DeprecatedBatchChangeInventorySecurity, config?: AxiosRequestConfig): Promise<operations.DeprecatedBatchChangeInventoryResponse>;
    /**
     * DeprecatedBatchRetrieveInventoryChanges
     *
     * @remarks
     * Deprecated version of [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes) after the endpoint URL
     * is updated to conform to the standard convention.
     */
    deprecatedBatchRetrieveInventoryChanges(req: shared.BatchRetrieveInventoryChangesRequest, security: operations.DeprecatedBatchRetrieveInventoryChangesSecurity, config?: AxiosRequestConfig): Promise<operations.DeprecatedBatchRetrieveInventoryChangesResponse>;
    /**
     * DeprecatedBatchRetrieveInventoryCounts
     *
     * @remarks
     * Deprecated version of [BatchRetrieveInventoryCounts](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-counts) after the endpoint URL
     * is updated to conform to the standard convention.
     */
    deprecatedBatchRetrieveInventoryCounts(req: shared.BatchRetrieveInventoryCountsRequest, security: operations.DeprecatedBatchRetrieveInventoryCountsSecurity, config?: AxiosRequestConfig): Promise<operations.DeprecatedBatchRetrieveInventoryCountsResponse>;
    /**
     * DeprecatedRetrieveInventoryAdjustment
     *
     * @remarks
     * Deprecated version of [RetrieveInventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-adjustment) after the endpoint URL
     * is updated to conform to the standard convention.
     */
    deprecatedRetrieveInventoryAdjustment(req: operations.DeprecatedRetrieveInventoryAdjustmentRequest, security: operations.DeprecatedRetrieveInventoryAdjustmentSecurity, config?: AxiosRequestConfig): Promise<operations.DeprecatedRetrieveInventoryAdjustmentResponse>;
    /**
     * DeprecatedRetrieveInventoryPhysicalCount
     *
     * @remarks
     * Deprecated version of [RetrieveInventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/retrieve-inventory-physical-count) after the endpoint URL
     * is updated to conform to the standard convention.
     */
    deprecatedRetrieveInventoryPhysicalCount(req: operations.DeprecatedRetrieveInventoryPhysicalCountRequest, security: operations.DeprecatedRetrieveInventoryPhysicalCountSecurity, config?: AxiosRequestConfig): Promise<operations.DeprecatedRetrieveInventoryPhysicalCountResponse>;
    /**
     * RetrieveInventoryAdjustment
     *
     * @remarks
     * Returns the [InventoryAdjustment](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryAdjustment) object
     * with the provided `adjustment_id`.
     */
    retrieveInventoryAdjustment(req: operations.RetrieveInventoryAdjustmentRequest, security: operations.RetrieveInventoryAdjustmentSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveInventoryAdjustmentResponse>;
    /**
     * RetrieveInventoryChanges
     *
     * @remarks
     * Returns a set of physical counts and inventory adjustments for the
     * provided [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at the requested
     * [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s.
     *
     * You can achieve the same result by calling [BatchRetrieveInventoryChanges](https://developer.squareup.com/reference/square_2021-08-18/inventory-api/batch-retrieve-inventory-changes)
     * and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.
     *
     * Results are paginated and sorted in descending order according to their
     * `occurred_at` timestamp (newest first).
     *
     * There are no limits on how far back the caller can page. This endpoint can be
     * used to display recent changes for a specific item. For more
     * sophisticated queries, use a batch endpoint.
     */
    retrieveInventoryChanges(req: operations.RetrieveInventoryChangesRequest, security: operations.RetrieveInventoryChangesSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveInventoryChangesResponse>;
    /**
     * RetrieveInventoryCount
     *
     * @remarks
     * Retrieves the current calculated stock count for a given
     * [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) at a given set of
     * [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location)s. Responses are paginated and unsorted.
     * For more sophisticated queries, use a batch endpoint.
     */
    retrieveInventoryCount(req: operations.RetrieveInventoryCountRequest, security: operations.RetrieveInventoryCountSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveInventoryCountResponse>;
    /**
     * RetrieveInventoryPhysicalCount
     *
     * @remarks
     * Returns the [InventoryPhysicalCount](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryPhysicalCount)
     * object with the provided `physical_count_id`.
     */
    retrieveInventoryPhysicalCount(req: operations.RetrieveInventoryPhysicalCountRequest, security: operations.RetrieveInventoryPhysicalCountSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveInventoryPhysicalCountResponse>;
    /**
     * RetrieveInventoryTransfer
     *
     * @remarks
     * Returns the [InventoryTransfer](https://developer.squareup.com/reference/square_2021-08-18/objects/InventoryTransfer) object
     * with the provided `transfer_id`.
     */
    retrieveInventoryTransfer(req: operations.RetrieveInventoryTransferRequest, security: operations.RetrieveInventoryTransferSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveInventoryTransferResponse>;
}
