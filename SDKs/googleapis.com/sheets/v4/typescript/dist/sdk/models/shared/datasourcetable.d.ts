import { SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { FilterSpec } from "./filterspec";
import { SortSpec } from "./sortspec";
/**
 * The type to select columns for the data source table. Defaults to SELECTED.
 */
export declare enum DataSourceTableColumnSelectionTypeEnum {
    DataSourceTableColumnSelectionTypeUnspecified = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED",
    Selected = "SELECTED",
    SyncAll = "SYNC_ALL"
}
/**
 * A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
 */
export declare class DataSourceTable extends SpeakeasyBase {
    /**
     * The type to select columns for the data source table. Defaults to SELECTED.
     */
    columnSelectionType?: DataSourceTableColumnSelectionTypeEnum;
    /**
     * Columns selected for the data source table. The column_selection_type must be SELECTED.
     */
    columns?: DataSourceColumnReference[];
    /**
     * The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.
     */
    dataExecutionStatus?: DataExecutionStatus;
    /**
     * The ID of the data source the data source table is associated with.
     */
    dataSourceId?: string;
    /**
     * Filter specifications in the data source table.
     */
    filterSpecs?: FilterSpec[];
    /**
     * The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit.
     */
    rowLimit?: number;
    /**
     * Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order.
     */
    sortSpecs?: SortSpec[];
}
