import { SpeakeasyBase } from "../../../internal/utils";
import { EntityResult } from "./entityresult";
import { Key } from "./key";
/**
 * The response for Datastore.Lookup.
 */
export declare class LookupResponse extends SpeakeasyBase {
    /**
     * A list of keys that were not looked up due to resource constraints. The order of results in this field is undefined and has no relation to the order of the keys in the input.
     */
    deferred?: Key[];
    /**
     * Entities found as `ResultType.FULL` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input.
     */
    found?: EntityResult[];
    /**
     * Entities not found as `ResultType.KEY_ONLY` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input.
     */
    missing?: EntityResult[];
    /**
     * The time at which these entities were read or found missing.
     */
    readTime?: string;
    /**
     * The identifier of the transaction that was started as part of this Lookup request. Set only when ReadOptions.new_transaction was set in LookupRequest.read_options.
     */
    transaction?: string;
}
