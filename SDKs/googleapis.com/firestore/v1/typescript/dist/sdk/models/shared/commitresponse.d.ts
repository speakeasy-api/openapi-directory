import { SpeakeasyBase } from "../../../internal/utils";
import { WriteResult } from "./writeresult";
/**
 * The response for Firestore.Commit.
 */
export declare class CommitResponse extends SpeakeasyBase {
    /**
     * The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the commit.
     */
    commitTime?: string;
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: WriteResult[];
}
