import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
/**
 * The request for Datastore.ReserveIds.
 */
export declare class ReserveIdsRequest extends SpeakeasyBase {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string;
    /**
     * Required. A list of keys with complete key paths whose numeric IDs should not be auto-allocated.
     */
    keys?: Key[];
}
