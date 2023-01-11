package openapisdk.models.shared;


public enum AccountActivityActivityLevelEnum {
    ACTIVITY_LEVEL_UNSPECIFIED("ACTIVITY_LEVEL_UNSPECIFIED"),
    UNEVALUATED("UNEVALUATED"),
    UNUSUAL("UNUSUAL"),
    UNKNOWN("UNKNOWN"),
    TYPICAL_BASIC("TYPICAL_BASIC"),
    TYPICAL_STRONG("TYPICAL_STRONG");

    public final String value;

    private AccountActivityActivityLevelEnum(String value) {
        this.value = value;
    }
}
