import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { ReadOptions } from "./readoptions";
/**
 * The request for Datastore.Lookup.
 */
export declare class LookupRequest extends SpeakeasyBase {
    /**
     * The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database.
     */
    databaseId?: string;
    /**
     * Required. Keys of entities to look up.
     */
    keys?: Key[];
    /**
     * The options shared by read requests.
     */
    readOptions?: ReadOptions;
}
