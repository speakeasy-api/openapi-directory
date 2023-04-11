import { SpeakeasyBase } from "../../../internal/utils";
import { DataExecutionStatus } from "./dataexecutionstatus";
import { DataSourceColumn } from "./datasourcecolumn";
/**
 * Additional properties of a DATA_SOURCE sheet.
 */
export declare class DataSourceSheetProperties extends SpeakeasyBase {
    /**
     * The columns displayed on the sheet, corresponding to the values in RowData.
     */
    columns?: DataSourceColumn[];
    /**
     * The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.
     */
    dataExecutionStatus?: DataExecutionStatus;
    /**
     * ID of the DataSource the sheet is connected to.
     */
    dataSourceId?: string;
}
