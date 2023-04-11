import { SpeakeasyBase } from "../../../internal/utils";
import { QueryAssetsOutputConfig } from "./queryassetsoutputconfig";
import { QueryResult } from "./queryresult";
import { Status } from "./status";
/**
 * QueryAssets response.
 */
export declare class QueryAssetsResponse extends SpeakeasyBase {
    /**
     * The query response, which can be either an `error` or a valid `response`. If `done` == `false` and the query result is being saved in a output, the output_config field will be set. If `done` == `true`, exactly one of `error`, `query_result` or `output_config` will be set.
     */
    done?: boolean;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Reference to a query job.
     */
    jobReference?: string;
    /**
     * Output configuration query assets.
     */
    outputConfig?: QueryAssetsOutputConfig;
    /**
     * Execution results of the query. The result is formatted as rows represented by BigQuery compatible [schema]. When pagination is necessary, it will contains the page token to retrieve the results of following pages.
     */
    queryResult?: QueryResult;
}
