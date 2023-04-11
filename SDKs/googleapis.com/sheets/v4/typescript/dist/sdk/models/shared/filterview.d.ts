import { SpeakeasyBase } from "../../../internal/utils";
import { FilterCriteria } from "./filtercriteria";
import { FilterSpec } from "./filterspec";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";
/**
 * A filter view.
 */
export declare class FilterView extends SpeakeasyBase {
    /**
     * The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs.
     */
    criteria?: Record<string, FilterCriteria>;
    /**
     * The filter criteria for showing/hiding values per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence.
     */
    filterSpecs?: FilterSpec[];
    /**
     * The ID of the filter view.
     */
    filterViewId?: number;
    /**
     * The named range this filter view is backed by, if any. When writing, only one of range or named_range_id may be set.
     */
    namedRangeId?: string;
    /**
     * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
     */
    range?: GridRange;
    /**
     * The sort order per column. Later specifications are used when values are equal in the earlier specifications.
     */
    sortSpecs?: SortSpec[];
    /**
     * The name of the filter view.
     */
    title?: string;
}
