import { SpeakeasyBase } from "../../../internal/utils";
import { Write } from "./write";
/**
 * The request for Firestore.Commit.
 */
export declare class CommitRequest extends SpeakeasyBase {
    /**
     * If set, applies all writes in this transaction, and commits it.
     */
    transaction?: string;
    /**
     * The writes to apply. Always executed atomically and in order.
     */
    writes?: Write[];
}
