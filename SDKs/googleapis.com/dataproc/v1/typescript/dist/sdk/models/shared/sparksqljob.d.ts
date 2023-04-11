import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.
 */
export declare class SparkSqlJob extends SpeakeasyBase {
    /**
     * Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
     */
    jarFileUris?: string[];
    /**
     * The runtime logging config of the job.
     */
    loggingConfig?: LoggingConfig;
    /**
     * Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.
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
    /**
     * Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).
     */
    scriptVariables?: Record<string, string>;
}
