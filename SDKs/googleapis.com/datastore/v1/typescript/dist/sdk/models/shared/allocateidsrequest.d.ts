import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
/**
 * The request for Datastore.AllocateIds.
 */
export declare class AllocateIdsRequest extends SpeakeasyBase {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string;
    /**
     * Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only.
     */
    keys?: Key[];
}
