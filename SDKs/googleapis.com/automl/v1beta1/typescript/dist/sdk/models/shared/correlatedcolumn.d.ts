import { SpeakeasyBase } from "../../../internal/utils";
import { CorrelationStats } from "./correlationstats";
/**
 * Identifies the table's column, and its correlation with the column this ColumnSpec describes.
 */
export declare class CorrelatedColumn extends SpeakeasyBase {
    /**
     * The column_spec_id of the correlated column, which belongs to the same table as the in-context column.
     */
    columnSpecId?: string;
    /**
     * A correlation statistics between two series of DataType values. The series may have differing DataType-s, but within a single series the DataType must be the same.
     */
    correlationStats?: CorrelationStats;
}
