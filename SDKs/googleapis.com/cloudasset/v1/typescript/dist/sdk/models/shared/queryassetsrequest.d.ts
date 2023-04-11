import { SpeakeasyBase } from "../../../internal/utils";
import { QueryAssetsOutputConfig } from "./queryassetsoutputconfig";
import { TimeWindow } from "./timewindow";
/**
 * QueryAssets request.
 */
export declare class QueryAssetsRequest extends SpeakeasyBase {
    /**
     * Optional. Reference to the query job, which is from the `QueryAssetsResponse` of previous `QueryAssets` call.
     */
    jobReference?: string;
    /**
     * Output configuration query assets.
     */
    outputConfig?: QueryAssetsOutputConfig;
    /**
     * Optional. The maximum number of rows to return in the results. Responses are limited to 10 MB and 1000 rows. By default, the maximum row count is 1000. When the byte or row count limit is reached, the rest of the query results will be paginated. The field will be ignored when [output_config] is specified.
     */
    pageSize?: number;
    /**
     * Optional. A page token received from previous `QueryAssets`. The field will be ignored when [output_config] is specified.
     */
    pageToken?: string;
    /**
     * Optional. Queries cloud assets as they appeared at the specified point in time.
     */
    readTime?: string;
    /**
     * A time window specified by its `start_time` and `end_time`.
     */
    readTimeWindow?: TimeWindow;
    /**
     * Optional. A SQL statement that's compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql).
     */
    statement?: string;
    /**
     * Optional. Specifies the maximum amount of time that the client is willing to wait for the query to complete. By default, this limit is 5 min for the first query, and 1 minute for the following queries. If the query is complete, the `done` field in the `QueryAssetsResponse` is true, otherwise false. Like BigQuery [jobs.query API](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#queryrequest) The call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. The field will be ignored when [output_config] is specified.
     */
    timeout?: string;
}
