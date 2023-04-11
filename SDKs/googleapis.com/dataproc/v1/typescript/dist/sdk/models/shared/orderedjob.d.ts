import { SpeakeasyBase } from "../../../internal/utils";
import { HadoopJob } from "./hadoopjob";
import { HiveJob } from "./hivejob";
import { JobScheduling } from "./jobscheduling";
import { PigJob } from "./pigjob";
import { PrestoJob } from "./prestojob";
import { PySparkJob } from "./pysparkjob";
import { SparkJob } from "./sparkjob";
import { SparkRJob } from "./sparkrjob";
import { SparkSqlJob } from "./sparksqljob";
import { TrinoJob } from "./trinojob";
/**
 * A job executed by the workflow.
 */
export declare class OrderedJob extends SpeakeasyBase {
    /**
     * A Dataproc job for running Apache Hadoop MapReduce (https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) jobs on Apache Hadoop YARN (https://hadoop.apache.org/docs/r2.7.1/hadoop-yarn/hadoop-yarn-site/YARN.html).
     */
    hadoopJob?: HadoopJob;
    /**
     * A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
     */
    hiveJob?: HiveJob;
    /**
     * Optional. The labels to associate with this job.Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to the following regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be associated with a given job.
     */
    labels?: Record<string, string>;
    /**
     * A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
     */
    pigJob?: PigJob;
    /**
     * Optional. The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
     */
    prerequisiteStepIds?: string[];
    /**
     * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
     */
    prestoJob?: PrestoJob;
    /**
     * A Dataproc job for running Apache PySpark (https://spark.apache.org/docs/0.9.0/python-programming-guide.html) applications on YARN.
     */
    pysparkJob?: PySparkJob;
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
     * Required. The step id. The id must be unique among all jobs within the template.The step id is used as prefix for job id, as job goog-dataproc-workflow-step-id label, and in prerequisiteStepIds field from other steps.The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
     */
    stepId?: string;
    /**
     * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
     */
    trinoJob?: TrinoJob;
}
