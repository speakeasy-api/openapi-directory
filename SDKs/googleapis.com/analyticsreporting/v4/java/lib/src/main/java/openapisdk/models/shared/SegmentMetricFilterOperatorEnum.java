package openapisdk.models.shared;


public enum SegmentMetricFilterOperatorEnum {
    UNSPECIFIED_OPERATOR("UNSPECIFIED_OPERATOR"),
    LESS_THAN("LESS_THAN"),
    GREATER_THAN("GREATER_THAN"),
    EQUAL("EQUAL"),
    BETWEEN("BETWEEN");

    public final String value;

    private SegmentMetricFilterOperatorEnum(String value) {
        this.value = value;
    }
}
