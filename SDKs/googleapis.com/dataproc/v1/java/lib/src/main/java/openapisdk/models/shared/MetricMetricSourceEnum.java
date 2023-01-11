package openapisdk.models.shared;


public enum MetricMetricSourceEnum {
    METRIC_SOURCE_UNSPECIFIED("METRIC_SOURCE_UNSPECIFIED"),
    MONITORING_AGENT_DEFAULTS("MONITORING_AGENT_DEFAULTS"),
    HDFS("HDFS"),
    SPARK("SPARK"),
    YARN("YARN"),
    SPARK_HISTORY_SERVER("SPARK_HISTORY_SERVER"),
    HIVESERVER2("HIVESERVER2");

    public final String value;

    private MetricMetricSourceEnum(String value) {
        this.value = value;
    }
}
