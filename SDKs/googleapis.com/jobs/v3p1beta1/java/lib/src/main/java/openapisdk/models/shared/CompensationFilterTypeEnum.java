package openapisdk.models.shared;


public enum CompensationFilterTypeEnum {
    FILTER_TYPE_UNSPECIFIED("FILTER_TYPE_UNSPECIFIED"),
    UNIT_ONLY("UNIT_ONLY"),
    UNIT_AND_AMOUNT("UNIT_AND_AMOUNT"),
    ANNUALIZED_BASE_AMOUNT("ANNUALIZED_BASE_AMOUNT"),
    ANNUALIZED_TOTAL_AMOUNT("ANNUALIZED_TOTAL_AMOUNT");

    public final String value;

    private CompensationFilterTypeEnum(String value) {
        this.value = value;
    }
}
