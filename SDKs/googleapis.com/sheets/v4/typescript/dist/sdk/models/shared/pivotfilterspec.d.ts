import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { PivotFilterCriteria } from "./pivotfiltercriteria";
/**
 * The pivot table filter criteria associated with a specific source column offset.
 */
export declare class PivotFilterSpec extends SpeakeasyBase {
    /**
     * The column offset of the source range.
     */
    columnOffsetIndex?: number;
    /**
     * An unique identifier that references a data source column.
     */
    dataSourceColumnReference?: DataSourceColumnReference;
    /**
     * Criteria for showing/hiding rows in a pivot table.
     */
    filterCriteria?: PivotFilterCriteria;
}
