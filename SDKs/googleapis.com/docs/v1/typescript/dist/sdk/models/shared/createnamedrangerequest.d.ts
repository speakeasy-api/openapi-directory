import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
/**
 * Creates a NamedRange referencing the given range.
 */
export declare class CreateNamedRangeRequest extends SpeakeasyBase {
    /**
     * The name of the NamedRange. Names do not need to be unique. Names must be at least 1 character and no more than 256 characters, measured in UTF-16 code units.
     */
    name?: string;
    /**
     * Specifies a contiguous range of text.
     */
    range?: Range;
}
