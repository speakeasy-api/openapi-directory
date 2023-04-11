import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { InventoryCount } from "./inventorycount";
/**
 * Success
 */
export declare class BatchRetrieveInventoryCountsResponse extends SpeakeasyBase {
    /**
     * The current calculated inventory counts for the requested objects
     *
     * @remarks
     * and locations.
     */
    counts?: InventoryCount[];
    /**
     * The pagination cursor to be used in a subsequent request. If unset,
     *
     * @remarks
     * this is the final response.
     *
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
