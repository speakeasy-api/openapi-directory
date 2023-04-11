import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
 */
export declare class PrestoJob extends SpeakeasyBase {
    /**
     * Optional. Presto client tags to attach to this query
     */
    clientTags?: string[];
    /**
     * Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
     */
    continueOnFailure?: boolean;
    /**
     * The runtime logging config of the job.
     */
    loggingConfig?: LoggingConfig;
    /**
     * Optional. The format in which query output will be displayed. See the Presto documentation for supported output formats
     */
    outputFormat?: string;
    /**
     * Optional. A mapping of property names to values. Used to set Presto session properties (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI
     */
    properties?: Record<string, string>;
    /**
     * The HCFS URI of the script that contains SQL queries.
     */
    queryFileUri?: string;
    /**
     * A list of queries to run on a cluster.
     */
    queryList?: QueryList;
}
