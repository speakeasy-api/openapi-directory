import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { FilterCriteria } from "./filtercriteria";
/**
 * The filter criteria associated with a specific column.
 */
export declare class FilterSpec extends SpeakeasyBase {
    /**
     * The column index.
     */
    columnIndex?: number;
    /**
     * An unique identifier that references a data source column.
     */
    dataSourceColumnReference?: DataSourceColumnReference;
    /**
     * Criteria for showing/hiding rows in a filter or filter view.
     */
    filterCriteria?: FilterCriteria;
}
