package openapisdk.models.shared;


public enum PerfMetricsSummaryPerfMetricsEnum {
    PERF_METRIC_TYPE_UNSPECIFIED("perfMetricTypeUnspecified"),
    MEMORY("memory"),
    CPU("cpu"),
    NETWORK("network"),
    GRAPHICS("graphics");

    public final String value;

    private PerfMetricsSummaryPerfMetricsEnum(String value) {
        this.value = value;
    }
}
