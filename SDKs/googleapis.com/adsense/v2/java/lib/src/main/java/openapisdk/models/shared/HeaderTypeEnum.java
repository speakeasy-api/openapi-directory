package openapisdk.models.shared;


public enum HeaderTypeEnum {
    HEADER_TYPE_UNSPECIFIED("HEADER_TYPE_UNSPECIFIED"),
    DIMENSION("DIMENSION"),
    METRIC_TALLY("METRIC_TALLY"),
    METRIC_RATIO("METRIC_RATIO"),
    METRIC_CURRENCY("METRIC_CURRENCY"),
    METRIC_MILLISECONDS("METRIC_MILLISECONDS"),
    METRIC_DECIMAL("METRIC_DECIMAL");

    public final String value;

    private HeaderTypeEnum(String value) {
        this.value = value;
    }
}
