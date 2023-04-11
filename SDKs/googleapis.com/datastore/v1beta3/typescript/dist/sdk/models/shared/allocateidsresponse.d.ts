import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
/**
 * The response for Datastore.AllocateIds.
 */
export declare class AllocateIdsResponse extends SpeakeasyBase {
    /**
     * The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID.
     */
    keys?: Key[];
}
