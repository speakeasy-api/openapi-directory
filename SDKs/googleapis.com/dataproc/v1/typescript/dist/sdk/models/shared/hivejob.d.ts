import { SpeakeasyBase } from "../../../internal/utils";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
 */
export declare class HiveJob extends SpeakeasyBase {
    /**
     * Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
     */
    continueOnFailure?: boolean;
    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
     */
    jarFileUris?: string[];
    /**
     * Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
     */
    properties?: Record<string, string>;
    /**
     * The HCFS URI of the script that contains Hive queries.
     */
    queryFileUri?: string;
    /**
     * A list of queries to run on a cluster.
     */
    queryList?: QueryList;
    /**
     * Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).
     */
    scriptVariables?: Record<string, string>;
}
