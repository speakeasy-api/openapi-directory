import { SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { GridRange } from "./gridrange";
import { PivotFilterCriteria } from "./pivotfiltercriteria";
import { PivotFilterSpec } from "./pivotfilterspec";
import { PivotGroup } from "./pivotgroup";
import { PivotValue } from "./pivotvalue";
/**
 * Whether values should be listed horizontally (as columns) or vertically (as rows).
 */
export declare enum PivotTableValueLayoutEnum {
    Horizontal = "HORIZONTAL",
    Vertical = "VERTICAL"
}
/**
 * A pivot table.
 */
export declare class PivotTable extends SpeakeasyBase {
    /**
     * Each column grouping in the pivot table.
     */
    columns?: PivotGroup[];
    /**
     * An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was `C10:E15`, a key of `0` will have the filter for column `C`, whereas the key `1` is for column `D`. This field is deprecated in favor of filter_specs.
     */
    criteria?: Record<string, PivotFilterCriteria>;
    /**
     * The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.
     */
    dataExecutionStatus?: DataExecutionStatus;
    /**
     * The ID of the data source the pivot table is reading data from.
     */
    dataSourceId?: string;
    /**
     * The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence.
     */
    filterSpecs?: PivotFilterSpec[];
    /**
     * Each row grouping in the pivot table.
     */
    rows?: PivotGroup[];
    /**
     * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
     */
    source?: GridRange;
    /**
     * Whether values should be listed horizontally (as columns) or vertically (as rows).
     */
    valueLayout?: PivotTableValueLayoutEnum;
    /**
     * A list of values to include in the pivot table.
     */
    values?: PivotValue[];
}
