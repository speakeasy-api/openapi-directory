package openapisdk.models.shared;


public enum CloudSqlPropertiesTypeEnum {
    DATABASE_TYPE_UNSPECIFIED("DATABASE_TYPE_UNSPECIFIED"),
    POSTGRES("POSTGRES"),
    MYSQL("MYSQL");

    public final String value;

    private CloudSqlPropertiesTypeEnum(String value) {
        this.value = value;
    }
}
