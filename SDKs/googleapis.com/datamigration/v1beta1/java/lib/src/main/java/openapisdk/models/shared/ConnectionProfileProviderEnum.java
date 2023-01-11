package openapisdk.models.shared;


public enum ConnectionProfileProviderEnum {
    DATABASE_PROVIDER_UNSPECIFIED("DATABASE_PROVIDER_UNSPECIFIED"),
    CLOUDSQL("CLOUDSQL"),
    RDS("RDS");

    public final String value;

    private ConnectionProfileProviderEnum(String value) {
        this.value = value;
    }
}
