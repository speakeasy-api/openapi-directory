package openapisdk.models.shared;


public enum MetricEnumStreamDirectionEnum {
    UNKNOWN("unknown"),
    INBOUND("inbound"),
    OUTBOUND("outbound"),
    BOTH("both");

    public final String value;

    private MetricEnumStreamDirectionEnum(String value) {
        this.value = value;
    }
}
