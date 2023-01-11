package openapisdk.models.shared;


public enum MetricFilterOperatorEnum {
    OPERATOR_UNSPECIFIED("OPERATOR_UNSPECIFIED"),
    EQUAL("EQUAL"),
    LESS_THAN("LESS_THAN"),
    GREATER_THAN("GREATER_THAN"),
    IS_MISSING("IS_MISSING");

    public final String value;

    private MetricFilterOperatorEnum(String value) {
        this.value = value;
    }
}
