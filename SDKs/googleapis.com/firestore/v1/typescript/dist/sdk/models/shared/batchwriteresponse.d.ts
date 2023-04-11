import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { WriteResult } from "./writeresult";
/**
 * The response from Firestore.BatchWrite.
 */
export declare class BatchWriteResponse extends SpeakeasyBase {
    /**
     * The status of applying the writes. This i-th write status corresponds to the i-th write in the request.
     */
    status?: Status[];
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: WriteResult[];
}
