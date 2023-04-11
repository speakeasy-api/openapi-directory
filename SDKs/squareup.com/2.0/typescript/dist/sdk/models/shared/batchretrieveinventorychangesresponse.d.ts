import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { InventoryChange } from "./inventorychange";
/**
 * Success
 */
export declare class BatchRetrieveInventoryChangesResponse extends SpeakeasyBase {
    /**
     * The current calculated inventory changes for the requested objects
     *
     * @remarks
     * and locations.
     */
    changes?: InventoryChange[];
    /**
     * The pagination cursor to be used in a subsequent request. If unset,
     *
     * @remarks
     * this is the final response.
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
