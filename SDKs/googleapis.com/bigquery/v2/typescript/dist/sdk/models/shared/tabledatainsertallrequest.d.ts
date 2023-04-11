import { SpeakeasyBase } from "../../../internal/utils";
export declare class TableDataInsertAllRequestRows extends SpeakeasyBase {
    /**
     * [Optional] A unique ID for each row. BigQuery uses this property to detect duplicate insertion requests on a best-effort basis.
     */
    insertId?: string;
    /**
     * Represents a single JSON object.
     */
    json?: Record<string, any>;
}
export declare class TableDataInsertAllRequest extends SpeakeasyBase {
    /**
     * [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.
     */
    ignoreUnknownValues?: boolean;
    /**
     * The resource type of the response.
     */
    kind?: string;
    /**
     * The rows to insert.
     */
    rows?: TableDataInsertAllRequestRows[];
    /**
     * [Optional] Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.
     */
    skipInvalidRows?: boolean;
    /**
     * If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.
     */
    templateSuffix?: string;
}
