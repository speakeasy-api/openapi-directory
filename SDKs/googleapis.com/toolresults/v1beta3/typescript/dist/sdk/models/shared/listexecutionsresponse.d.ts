import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
/**
 * Successful response
 */
export declare class ListExecutionsResponse extends SpeakeasyBase {
    /**
     * Executions. Always set.
     */
    executions?: Execution[];
    /**
     * A continuation token to resume the query at the next item. Will only be set if there are more Executions to fetch.
     */
    nextPageToken?: string;
}
