import { SpeakeasyBase } from "../../../internal/utils";
import { Write } from "./write";
/**
 * The request for Firestore.BatchWrite.
 */
export declare class BatchWriteRequest extends SpeakeasyBase {
    /**
     * Labels associated with this batch write.
     */
    labels?: Record<string, string>;
    /**
     * The writes to apply. Method does not apply writes atomically and does not guarantee ordering. Each write succeeds or fails independently. You cannot write to the same document more than once per request.
     */
    writes?: Write[];
}
