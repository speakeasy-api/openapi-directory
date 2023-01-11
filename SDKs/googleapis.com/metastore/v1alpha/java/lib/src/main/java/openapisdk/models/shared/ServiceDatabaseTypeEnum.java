package openapisdk.models.shared;


public enum ServiceDatabaseTypeEnum {
    DATABASE_TYPE_UNSPECIFIED("DATABASE_TYPE_UNSPECIFIED"),
    MYSQL("MYSQL"),
    SPANNER("SPANNER");

    public final String value;

    private ServiceDatabaseTypeEnum(String value) {
        this.value = value;
    }
}
