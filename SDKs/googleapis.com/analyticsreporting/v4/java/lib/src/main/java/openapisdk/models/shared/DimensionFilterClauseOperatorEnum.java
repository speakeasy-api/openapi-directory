package openapisdk.models.shared;


public enum DimensionFilterClauseOperatorEnum {
    OPERATOR_UNSPECIFIED("OPERATOR_UNSPECIFIED"),
    OR("OR"),
    AND("AND");

    public final String value;

    private DimensionFilterClauseOperatorEnum(String value) {
        this.value = value;
    }
}
