package openapisdk.models.shared;


public enum DimensionFilterOperatorEnum {
    OPERATOR_UNSPECIFIED("OPERATOR_UNSPECIFIED"),
    REGEXP("REGEXP"),
    BEGINS_WITH("BEGINS_WITH"),
    ENDS_WITH("ENDS_WITH"),
    PARTIAL("PARTIAL"),
    EXACT("EXACT"),
    NUMERIC_EQUAL("NUMERIC_EQUAL"),
    NUMERIC_GREATER_THAN("NUMERIC_GREATER_THAN"),
    NUMERIC_LESS_THAN("NUMERIC_LESS_THAN"),
    IN_LIST("IN_LIST");

    public final String value;

    private DimensionFilterOperatorEnum(String value) {
        this.value = value;
    }
}
