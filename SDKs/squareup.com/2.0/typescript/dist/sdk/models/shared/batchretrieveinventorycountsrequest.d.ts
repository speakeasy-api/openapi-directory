import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class BatchRetrieveInventoryCountsRequest extends SpeakeasyBase {
    /**
     * The filter to return results by `CatalogObject` ID.
     *
     * @remarks
     * The filter is applicable only when set.  The default is null.
     */
    catalogObjectIds?: string[];
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this to retrieve the next set of results for the original query.
     *
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
    /**
     * The filter to return results by `Location` ID.
     *
     * @remarks
     * This filter is applicable only when set. The default is null.
     */
    locationIds?: string[];
    /**
     * The filter to return results by `InventoryState`. The filter is only applicable when set.
     *
     * @remarks
     * Ignored are untracked states of `NONE`, `SOLD`, and `UNLINKED_RETURN`.
     * The default is null.
     */
    states?: string[];
    /**
     * The filter to return results with their `calculated_at` value
     *
     * @remarks
     * after the given time as specified in an RFC 3339 timestamp.
     * The default value is the UNIX epoch of (`1970-01-01T00:00:00Z`).
     */
    updatedAfter?: string;
}
