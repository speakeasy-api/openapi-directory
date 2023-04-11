import { SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";
/**
 * An execute sql query request containing the query and the connection to execute it on.
 */
export declare class ExecuteSqlQueryRequest extends SpeakeasyBase {
    /**
     * A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`.
     */
    query?: Query;
}
