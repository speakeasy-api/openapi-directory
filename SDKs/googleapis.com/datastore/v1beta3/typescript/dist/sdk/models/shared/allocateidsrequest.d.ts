import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
/**
 * The request for Datastore.AllocateIds.
 */
export declare class AllocateIdsRequest extends SpeakeasyBase {
    /**
     * Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only.
     */
    keys?: Key[];
}
