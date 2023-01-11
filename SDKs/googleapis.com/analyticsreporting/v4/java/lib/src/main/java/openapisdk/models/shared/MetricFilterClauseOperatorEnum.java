package openapisdk.models.shared;


public enum MetricFilterClauseOperatorEnum {
    OPERATOR_UNSPECIFIED("OPERATOR_UNSPECIFIED"),
    OR("OR"),
    AND("AND");

    public final String value;

    private MetricFilterClauseOperatorEnum(String value) {
        this.value = value;
    }
}
