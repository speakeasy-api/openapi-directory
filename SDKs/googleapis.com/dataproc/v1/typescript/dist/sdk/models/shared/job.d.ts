import { SpeakeasyBase } from "../../../internal/utils";
import { DriverSchedulingConfig } from "./driverschedulingconfig";
import { HadoopJob } from "./hadoopjob";
import { HiveJob } from "./hivejob";
import { JobPlacement, JobPlacementInput } from "./jobplacement";
import { JobReference } from "./jobreference";
import { JobScheduling } from "./jobscheduling";
import { JobStatus } from "./jobstatus";
import { PigJob } from "./pigjob";
import { PrestoJob } from "./prestojob";
import { PySparkJob } from "./pysparkjob";
import { SparkJob } from "./sparkjob";
import { SparkRJob } from "./sparkrjob";
import { SparkSqlJob } from "./sparksqljob";
import { TrinoJob } from "./trinojob";
import { YarnApplication } from "./yarnapplication";
/**
 * A Dataproc job resource.
 */
export declare class JobInput extends SpeakeasyBase {
    /**
     * Driver scheduling configuration.
     */
    driverSchedulingConfig?: DriverSchedulingConfig;
    /**
     * A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
     */
    hadoopJob?: HadoopJob;
    /**
     * A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
     */
    hiveJob?: HiveJob;
    /**
     * Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
     */
    labels?: Record<string, string>;
    /**
     * A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
     */
    pigJob?: PigJob;
    /**
     * Dataproc job config.
     */
    placement?: JobPlacementInput;
    /**
     * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
     */
    prestoJob?: PrestoJob;
    /**
     * A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.
     */
    pysparkJob?: PySparkJob;
    /**
     * Encapsulates the full scoping used to reference a job.
     */
    reference?: JobReference;
    /**
     * Job scheduling options.
     */
    scheduling?: JobScheduling;
    /**
     * A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.
     */
    sparkJob?: SparkJob;
    /**
     * A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.
     */
    sparkRJob?: SparkRJob;
    /**
     * A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.
     */
    sparkSqlJob?: SparkSqlJob;
    /**
     * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
     */
    trinoJob?: TrinoJob;
}
/**
 * A Dataproc job resource.
 */
export declare class Job extends SpeakeasyBase {
    /**
     * Output only. Indicates whether the job is completed. If the value is false, the job is still in progress. If true, the job is completed, and status.state field will indicate if it was successful, failed, or cancelled.
     */
    done?: boolean;
    /**
     * Output only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
     */
    driverControlFilesUri?: string;
    /**
     * Output only. A URI pointing to the location of the stdout of the job's driver program.
     */
    driverOutputResourceUri?: string;
    /**
     * Driver scheduling configuration.
     */
    driverSchedulingConfig?: DriverSchedulingConfig;
    /**
     * A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
     */
    hadoopJob?: HadoopJob;
    /**
     * A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
     */
    hiveJob?: HiveJob;
    /**
     * Output only. A UUID that uniquely identifies a job within the project over time. This is in contrast to a user-settable reference.job_id that may be reused over time.
     */
    jobUuid?: string;
    /**
     * Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
     */
    labels?: Record<string, string>;
    /**
     * A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
     */
    pigJob?: PigJob;
    /**
     * Dataproc job config.
     */
    placement?: JobPlacement;
    /**
     * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
     */
    prestoJob?: PrestoJob;
    /**
     * A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.
     */
    pysparkJob?: PySparkJob;
    /**
     * Encapsulates the full scoping used to reference a job.
     */
    reference?: JobReference;
    /**
     * Job scheduling options.
     */
    scheduling?: JobScheduling;
    /**
     * A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.
     */
    sparkJob?: SparkJob;
    /**
     * A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.
     */
    sparkRJob?: SparkRJob;
    /**
     * A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.
     */
    sparkSqlJob?: SparkSqlJob;
    /**
     * Dataproc job status.
     */
    status?: JobStatus;
    /**
     * Output only. The previous job status.
     */
    statusHistory?: JobStatus[];
    /**
     * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
     */
    trinoJob?: TrinoJob;
    /**
     * Output only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
     */
    yarnApplications?: YarnApplication[];
}
