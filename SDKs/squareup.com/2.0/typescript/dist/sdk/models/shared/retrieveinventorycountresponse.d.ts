import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { InventoryCount } from "./inventorycount";
/**
 * Success
 */
export declare class RetrieveInventoryCountResponse extends SpeakeasyBase {
    /**
     * The current calculated inventory counts for the requested object and
     *
     * @remarks
     * locations.
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
