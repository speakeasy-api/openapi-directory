package openapisdk.models.shared;


public enum MetricHeaderEntryTypeEnum {
    METRIC_TYPE_UNSPECIFIED("METRIC_TYPE_UNSPECIFIED"),
    INTEGER("INTEGER"),
    FLOAT("FLOAT"),
    CURRENCY("CURRENCY"),
    PERCENT("PERCENT"),
    TIME("TIME");

    public final String value;

    private MetricHeaderEntryTypeEnum(String value) {
        this.value = value;
    }
}
