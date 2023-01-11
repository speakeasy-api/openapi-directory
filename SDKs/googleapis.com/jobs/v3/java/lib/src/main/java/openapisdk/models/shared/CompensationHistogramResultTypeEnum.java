package openapisdk.models.shared;


public enum CompensationHistogramResultTypeEnum {
    COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED("COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"),
    BASE("BASE"),
    ANNUALIZED_BASE("ANNUALIZED_BASE"),
    ANNUALIZED_TOTAL("ANNUALIZED_TOTAL");

    public final String value;

    private CompensationHistogramResultTypeEnum(String value) {
        this.value = value;
    }
}
