package openapisdk.models.shared;


public enum ValueDescriptorMetricKindEnum {
    METRIC_KIND_UNSPECIFIED("METRIC_KIND_UNSPECIFIED"),
    GAUGE("GAUGE"),
    DELTA("DELTA"),
    CUMULATIVE("CUMULATIVE");

    public final String value;

    private ValueDescriptorMetricKindEnum(String value) {
        this.value = value;
    }
}
