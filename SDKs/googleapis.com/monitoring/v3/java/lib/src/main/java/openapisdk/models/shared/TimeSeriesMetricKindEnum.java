package openapisdk.models.shared;


public enum TimeSeriesMetricKindEnum {
    METRIC_KIND_UNSPECIFIED("METRIC_KIND_UNSPECIFIED"),
    GAUGE("GAUGE"),
    DELTA("DELTA"),
    CUMULATIVE("CUMULATIVE");

    public final String value;

    private TimeSeriesMetricKindEnum(String value) {
        this.value = value;
    }
}
