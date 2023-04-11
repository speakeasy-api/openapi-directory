import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * The result of applying a write.
 */
export declare class WriteResult extends SpeakeasyBase {
    /**
     * The results of applying each DocumentTransform.FieldTransform, in the same order.
     */
    transformResults?: Value[];
    /**
     * The last update time of the document after applying the write. Not set after a `delete`. If the write did not actually change the document, this will be the previous update_time.
     */
    updateTime?: string;
}
