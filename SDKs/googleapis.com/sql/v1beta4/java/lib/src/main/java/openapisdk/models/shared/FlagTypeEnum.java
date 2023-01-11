package openapisdk.models.shared;


public enum FlagTypeEnum {
    SQL_FLAG_TYPE_UNSPECIFIED("SQL_FLAG_TYPE_UNSPECIFIED"),
    BOOLEAN_("BOOLEAN"),
    STRING("STRING"),
    INTEGER("INTEGER"),
    NONE("NONE"),
    MYSQL_TIMEZONE_OFFSET("MYSQL_TIMEZONE_OFFSET"),
    FLOAT("FLOAT"),
    REPEATED_STRING("REPEATED_STRING");

    public final String value;

    private FlagTypeEnum(String value) {
        this.value = value;
    }
}
