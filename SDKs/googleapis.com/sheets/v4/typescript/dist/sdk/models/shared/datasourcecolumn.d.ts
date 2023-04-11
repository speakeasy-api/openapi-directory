import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
/**
 * A column in a data source.
 */
export declare class DataSourceColumn extends SpeakeasyBase {
    /**
     * The formula of the calculated column.
     */
    formula?: string;
    /**
     * An unique identifier that references a data source column.
     */
    reference?: DataSourceColumnReference;
}
