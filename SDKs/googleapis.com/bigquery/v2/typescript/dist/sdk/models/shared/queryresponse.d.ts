import { SpeakeasyBase } from "../../../internal/utils";
import { DmlStatistics } from "./dmlstatistics";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { SessionInfo } from "./sessioninfo";
import { TableRow } from "./tablerow";
import { TableSchema } from "./tableschema";
/**
 * Successful response
 */
export declare class QueryResponse extends SpeakeasyBase {
    /**
     * Whether the query result was fetched from the query cache.
     */
    cacheHit?: boolean;
    dmlStats?: DmlStatistics;
    /**
     * [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
     */
    errors?: ErrorProto[];
    /**
     * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
     */
    jobComplete?: boolean;
    jobReference?: JobReference;
    /**
     * The resource type.
     */
    kind?: string;
    /**
     * [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
     */
    numDmlAffectedRows?: string;
    /**
     * A token used for paging results.
     */
    pageToken?: string;
    /**
     * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.
     */
    rows?: TableRow[];
    schema?: TableSchema;
    sessionInfo?: SessionInfo;
    /**
     * The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.
     */
    totalBytesProcessed?: string;
    /**
     * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.
     */
    totalRows?: string;
}
