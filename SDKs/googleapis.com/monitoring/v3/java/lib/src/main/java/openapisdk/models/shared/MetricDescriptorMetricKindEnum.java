package openapisdk.models.shared;


public enum MetricDescriptorMetricKindEnum {
    METRIC_KIND_UNSPECIFIED("METRIC_KIND_UNSPECIFIED"),
    GAUGE("GAUGE"),
    DELTA("DELTA"),
    CUMULATIVE("CUMULATIVE");

    public final String value;

    private MetricDescriptorMetricKindEnum(String value) {
        this.value = value;
    }
}
