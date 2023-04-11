import { SpeakeasyBase } from "../../../internal/utils";
import { CorrelatedColumn } from "./correlatedcolumn";
import { DataStats } from "./datastats";
import { DataType } from "./datatype";
/**
 * A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables
 */
export declare class ColumnSpec extends SpeakeasyBase {
    /**
     * The data statistics of a series of values that share the same DataType.
     */
    dataStats?: DataStats;
    /**
     * Indicated the type of data that can be stored in a structured data entity (e.g. a table).
     */
    dataType?: DataType;
    /**
     * Output only. The name of the column to show in the interface. The name can be up to 100 characters long and can consist only of ASCII Latin letters A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and must start with a letter or a digit.
     */
    displayName?: string;
    /**
     * Used to perform consistent read-modify-write updates. If not set, a blind "overwrite" update happens.
     */
    etag?: string;
    /**
     * Output only. The resource name of the column specs. Form: `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}`
     */
    name?: string;
    /**
     * Deprecated.
     */
    topCorrelatedColumns?: CorrelatedColumn[];
}
