import { SpeakeasyBase } from "../../../internal/utils";
import { GridCoordinate } from "./gridcoordinate";
/**
 * Reference to a data source object.
 */
export declare class DataSourceObjectReference extends SpeakeasyBase {
    /**
     * References to a data source chart.
     */
    chartId?: number;
    /**
     * A coordinate in a sheet. All indexes are zero-based.
     */
    dataSourceFormulaCell?: GridCoordinate;
    /**
     * A coordinate in a sheet. All indexes are zero-based.
     */
    dataSourcePivotTableAnchorCell?: GridCoordinate;
    /**
     * A coordinate in a sheet. All indexes are zero-based.
     */
    dataSourceTableAnchorCell?: GridCoordinate;
    /**
     * References to a DATA_SOURCE sheet.
     */
    sheetId?: string;
}
