import { SpeakeasyBase } from "../../../internal/utils";
import { MutationResult } from "./mutationresult";
/**
 * The response for Datastore.Commit.
 */
export declare class CommitResponse extends SpeakeasyBase {
    /**
     * The transaction commit timestamp. Not set for non-transactional commits.
     */
    commitTime?: string;
    /**
     * The number of index entries updated during the commit, or zero if none were updated.
     */
    indexUpdates?: number;
    /**
     * The result of performing the mutations. The i-th mutation result corresponds to the i-th mutation in the request.
     */
    mutationResults?: MutationResult[];
}
