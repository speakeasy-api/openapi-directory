import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
 */
export declare class SparkSqlBatch extends SpeakeasyBase {
    /**
     * Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
     */
    jarFileUris?: string[];
    /**
     * Required. The HCFS URI of the script that contains Spark SQL queries to execute.
     */
    queryFileUri?: string;
    /**
     * Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).
     */
    queryVariables?: Record<string, string>;
}
