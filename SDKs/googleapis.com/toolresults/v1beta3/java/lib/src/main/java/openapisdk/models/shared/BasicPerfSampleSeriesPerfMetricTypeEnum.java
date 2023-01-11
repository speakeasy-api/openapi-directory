package openapisdk.models.shared;


public enum BasicPerfSampleSeriesPerfMetricTypeEnum {
    PERF_METRIC_TYPE_UNSPECIFIED("perfMetricTypeUnspecified"),
    MEMORY("memory"),
    CPU("cpu"),
    NETWORK("network"),
    GRAPHICS("graphics");

    public final String value;

    private BasicPerfSampleSeriesPerfMetricTypeEnum(String value) {
        this.value = value;
    }
}
