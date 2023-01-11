package openapisdk.models.shared;


public enum MetricThresholdComparisonEnum {
    COMPARISON_UNSPECIFIED("COMPARISON_UNSPECIFIED"),
    COMPARISON_GT("COMPARISON_GT"),
    COMPARISON_GE("COMPARISON_GE"),
    COMPARISON_LT("COMPARISON_LT"),
    COMPARISON_LE("COMPARISON_LE"),
    COMPARISON_EQ("COMPARISON_EQ"),
    COMPARISON_NE("COMPARISON_NE");

    public final String value;

    private MetricThresholdComparisonEnum(String value) {
        this.value = value;
    }
}
