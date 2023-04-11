import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
/**
 * Deletes content from the document.
 */
export declare class DeleteContentRangeRequest extends SpeakeasyBase {
    /**
     * Specifies a contiguous range of text.
     */
    range?: Range;
}
