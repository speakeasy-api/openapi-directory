import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { ReadOptions } from "./readoptions";
/**
 * The request for Datastore.Lookup.
 */
export declare class LookupRequest extends SpeakeasyBase {
    /**
     * Required. Keys of entities to look up.
     */
    keys?: Key[];
    /**
     * The options shared by read requests.
     */
    readOptions?: ReadOptions;
}
