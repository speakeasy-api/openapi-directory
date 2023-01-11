package openapisdk.models.shared;


public enum ScorecardChartSpecAggregateTypeEnum {
    CHART_AGGREGATE_TYPE_UNSPECIFIED("CHART_AGGREGATE_TYPE_UNSPECIFIED"),
    AVERAGE("AVERAGE"),
    COUNT("COUNT"),
    MAX("MAX"),
    MEDIAN("MEDIAN"),
    MIN("MIN"),
    SUM("SUM");

    public final String value;

    private ScorecardChartSpecAggregateTypeEnum(String value) {
        this.value = value;
    }
}
