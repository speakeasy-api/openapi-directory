package openapisdk.models.shared;


public enum DatabaseTypeProviderEnum {
    DATABASE_PROVIDER_UNSPECIFIED("DATABASE_PROVIDER_UNSPECIFIED"),
    CLOUDSQL("CLOUDSQL"),
    RDS("RDS"),
    AURORA("AURORA"),
    ALLOYDB("ALLOYDB");

    public final String value;

    private DatabaseTypeProviderEnum(String value) {
        this.value = value;
    }
}
