import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of range.
 */
export declare enum RangeTypeEnum {
    RangeTypeUnspecified = "RANGE_TYPE_UNSPECIFIED",
    FixedRange = "FIXED_RANGE",
    FromStartIndex = "FROM_START_INDEX",
    All = "ALL"
}
/**
 * Specifies a contiguous range of an indexed collection, such as characters in text.
 */
export declare class Range extends SpeakeasyBase {
    /**
     * The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.
     */
    endIndex?: number;
    /**
     * The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.
     */
    startIndex?: number;
    /**
     * The type of range.
     */
    type?: RangeTypeEnum;
}
