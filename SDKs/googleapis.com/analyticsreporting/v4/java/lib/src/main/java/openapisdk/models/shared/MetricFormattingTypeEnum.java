package openapisdk.models.shared;


public enum MetricFormattingTypeEnum {
    METRIC_TYPE_UNSPECIFIED("METRIC_TYPE_UNSPECIFIED"),
    INTEGER("INTEGER"),
    FLOAT("FLOAT"),
    CURRENCY("CURRENCY"),
    PERCENT("PERCENT"),
    TIME("TIME");

    public final String value;

    private MetricFormattingTypeEnum(String value) {
        this.value = value;
    }
}
