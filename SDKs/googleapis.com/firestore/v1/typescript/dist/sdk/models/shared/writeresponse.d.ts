import { SpeakeasyBase } from "../../../internal/utils";
import { WriteResult } from "./writeresult";
/**
 * The response for Firestore.Write.
 */
export declare class WriteResponse extends SpeakeasyBase {
    /**
     * The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the write.
     */
    commitTime?: string;
    /**
     * The ID of the stream. Only set on the first message, when a new stream was created.
     */
    streamId?: string;
    /**
     * A token that represents the position of this response in the stream. This can be used by a client to resume the stream at this point. This field is always set.
     */
    streamToken?: string;
    /**
     * The result of applying the writes. This i-th write result corresponds to the i-th write in the request.
     */
    writeResults?: WriteResult[];
}
