import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingConfig } from "./loggingconfig";
import { QueryList } from "./querylist";
/**
 * A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
 */
export declare class PigJob extends SpeakeasyBase {
    /**
     * Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries.
     */
    continueOnFailure?: boolean;
    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
     */
    jarFileUris?: string[];
    /**
     * The runtime logging config of the job.
     */
    loggingConfig?: LoggingConfig;
    /**
     * Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
     */
    properties?: Record<string, string>;
    /**
     * The HCFS URI of the script that contains the Pig queries.
     */
    queryFileUri?: string;
    /**
     * A list of queries to run on a cluster.
     */
    queryList?: QueryList;
    /**
     * Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).
     */
    scriptVariables?: Record<string, string>;
}
