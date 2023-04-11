import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A digest of all the documents that match a given target.
 */
export declare class ExistenceFilter extends SpeakeasyBase {
    /**
     * The total count of documents that match target_id. If different from the count of documents in the client that match, the client must manually determine which documents no longer match the target.
     */
    count?: number;
    /**
     * The target ID to which this filter applies.
     */
    targetId?: number;
}
