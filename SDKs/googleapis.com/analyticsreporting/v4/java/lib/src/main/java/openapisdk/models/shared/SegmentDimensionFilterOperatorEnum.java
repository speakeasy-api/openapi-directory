package openapisdk.models.shared;


public enum SegmentDimensionFilterOperatorEnum {
    OPERATOR_UNSPECIFIED("OPERATOR_UNSPECIFIED"),
    REGEXP("REGEXP"),
    BEGINS_WITH("BEGINS_WITH"),
    ENDS_WITH("ENDS_WITH"),
    PARTIAL("PARTIAL"),
    EXACT("EXACT"),
    IN_LIST("IN_LIST"),
    NUMERIC_LESS_THAN("NUMERIC_LESS_THAN"),
    NUMERIC_GREATER_THAN("NUMERIC_GREATER_THAN"),
    NUMERIC_BETWEEN("NUMERIC_BETWEEN");

    public final String value;

    private SegmentDimensionFilterOperatorEnum(String value) {
        this.value = value;
    }
}
