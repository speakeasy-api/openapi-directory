package openapisdk.models.shared;


public enum OtoroshiHealthDatastoreEnum {
    HEALTHY("healthy"),
    UNHEALTHY("unhealthy"),
    UNREACHABLE("unreachable");

    public final String value;

    private OtoroshiHealthDatastoreEnum(String value) {
        this.value = value;
    }
}
