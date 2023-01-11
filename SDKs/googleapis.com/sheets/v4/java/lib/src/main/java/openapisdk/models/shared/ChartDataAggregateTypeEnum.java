package openapisdk.models.shared;


public enum ChartDataAggregateTypeEnum {
    CHART_AGGREGATE_TYPE_UNSPECIFIED("CHART_AGGREGATE_TYPE_UNSPECIFIED"),
    AVERAGE("AVERAGE"),
    COUNT("COUNT"),
    MAX("MAX"),
    MEDIAN("MEDIAN"),
    MIN("MIN"),
    SUM("SUM");

    public final String value;

    private ChartDataAggregateTypeEnum(String value) {
        this.value = value;
    }
}
