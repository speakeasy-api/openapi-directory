import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The dimension of the span.
 */
export declare enum DimensionRangeDimensionEnum {
    DimensionUnspecified = "DIMENSION_UNSPECIFIED",
    Rows = "ROWS",
    Columns = "COLUMNS"
}
/**
 * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
 */
export declare class DimensionRange extends SpeakeasyBase {
    /**
     * The dimension of the span.
     */
    dimension?: DimensionRangeDimensionEnum;
    /**
     * The end (exclusive) of the span, or not set if unbounded.
     */
    endIndex?: number;
    /**
     * The sheet this span is on.
     */
    sheetId?: number;
    /**
     * The start (inclusive) of the span, or not set if unbounded.
     */
    startIndex?: number;
}
