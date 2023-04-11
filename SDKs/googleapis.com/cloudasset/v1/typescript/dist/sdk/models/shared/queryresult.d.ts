import { SpeakeasyBase } from "../../../internal/utils";
import { TableSchema } from "./tableschema";
/**
 * Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages.
 */
export declare class QueryResult extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of the results.
     */
    nextPageToken?: string;
    /**
     * Each row hold a query result in the format of `Struct`.
     */
    rows?: Record<string, any>[];
    /**
     * BigQuery Compatible table schema.
     */
    schema?: TableSchema;
    /**
     * Total rows of the whole query results.
     */
    totalRows?: string;
}
