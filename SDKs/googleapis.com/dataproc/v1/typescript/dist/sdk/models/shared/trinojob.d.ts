import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
 */
export declare class TrinoJob extends SpeakeasyBase {
    /**
     * Optional. Trino client tags to attach to this query
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
     * Optional. The format in which query output will be displayed. See the Trino documentation for supported output formats
     */
    outputFormat?: string;
    /**
     * Optional. A mapping of property names to values. Used to set Trino session properties (https://trino.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Trino CLI
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
