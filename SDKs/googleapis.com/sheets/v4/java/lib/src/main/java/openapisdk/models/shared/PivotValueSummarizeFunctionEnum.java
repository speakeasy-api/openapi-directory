package openapisdk.models.shared;


public enum PivotValueSummarizeFunctionEnum {
    PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED("PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED"),
    SUM("SUM"),
    COUNTA("COUNTA"),
    COUNT("COUNT"),
    COUNTUNIQUE("COUNTUNIQUE"),
    AVERAGE("AVERAGE"),
    MAX("MAX"),
    MIN("MIN"),
    MEDIAN("MEDIAN"),
    PRODUCT("PRODUCT"),
    STDEV("STDEV"),
    STDEVP("STDEVP"),
    VAR("VAR"),
    VARP("VARP"),
    CUSTOM("CUSTOM");

    public final String value;

    private PivotValueSummarizeFunctionEnum(String value) {
        this.value = value;
    }
}
