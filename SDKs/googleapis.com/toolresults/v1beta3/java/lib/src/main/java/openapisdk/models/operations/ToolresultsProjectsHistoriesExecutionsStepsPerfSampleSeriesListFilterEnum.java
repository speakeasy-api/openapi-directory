package openapisdk.models.operations;


public enum ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum {
    PERF_METRIC_TYPE_UNSPECIFIED("perfMetricTypeUnspecified"),
    MEMORY("memory"),
    CPU("cpu"),
    NETWORK("network"),
    GRAPHICS("graphics");

    public final String value;

    private ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum(String value) {
        this.value = value;
    }
}
