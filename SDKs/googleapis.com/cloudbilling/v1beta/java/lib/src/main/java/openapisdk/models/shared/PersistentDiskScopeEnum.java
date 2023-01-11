package openapisdk.models.shared;


public enum PersistentDiskScopeEnum {
    SCOPE_UNSPECIFIED("SCOPE_UNSPECIFIED"),
    SCOPE_ZONAL("SCOPE_ZONAL"),
    SCOPE_REGIONAL("SCOPE_REGIONAL");

    public final String value;

    private PersistentDiskScopeEnum(String value) {
        this.value = value;
    }
}
