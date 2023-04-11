import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Default metrics are collected unless metricOverrides are specified for the metric source (see Available OSS metrics (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) for more information).
 */
export declare enum MetricMetricSourceEnum {
    MetricSourceUnspecified = "METRIC_SOURCE_UNSPECIFIED",
    MonitoringAgentDefaults = "MONITORING_AGENT_DEFAULTS",
    Hdfs = "HDFS",
    Spark = "SPARK",
    Yarn = "YARN",
    SparkHistoryServer = "SPARK_HISTORY_SERVER",
    Hiveserver2 = "HIVESERVER2",
    Hivemetastore = "HIVEMETASTORE"
}
/**
 * A Dataproc OSS metric.
 */
export declare class Metric extends SpeakeasyBase {
    /**
     * Optional. Specify one or more available OSS metrics (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) to collect for the metric course (for the SPARK metric source, any Spark metric (https://spark.apache.org/docs/latest/monitoring.html#metrics) can be specified).Provide metrics in the following format: METRIC_SOURCE: INSTANCE:GROUP:METRIC Use camelcase as appropriate.Examples: yarn:ResourceManager:QueueMetrics:AppsCompleted spark:driver:DAGScheduler:job.allJobs sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed hiveserver2:JVM:Memory:NonHeapMemoryUsage.used Notes: Only the specified overridden metrics will be collected for the metric source. For example, if one or more spark:executive metrics are listed as metric overrides, other SPARK metrics will not be collected. The collection of the default metrics for other OSS metric sources is unaffected. For example, if both SPARK andd YARN metric sources are enabled, and overrides are provided for Spark metrics only, all default YARN metrics will be collected.
     */
    metricOverrides?: string[];
    /**
     * Required. Default metrics are collected unless metricOverrides are specified for the metric source (see Available OSS metrics (https://cloud.google.com/dataproc/docs/guides/monitoring#available_oss_metrics) for more information).
     */
    metricSource?: MetricMetricSourceEnum;
}
