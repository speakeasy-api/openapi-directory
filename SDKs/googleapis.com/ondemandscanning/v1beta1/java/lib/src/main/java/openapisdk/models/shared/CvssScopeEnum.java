package openapisdk.models.shared;


public enum CvssScopeEnum {
    SCOPE_UNSPECIFIED("SCOPE_UNSPECIFIED"),
    SCOPE_UNCHANGED("SCOPE_UNCHANGED"),
    SCOPE_CHANGED("SCOPE_CHANGED");

    public final String value;

    private CvssScopeEnum(String value) {
        this.value = value;
    }
}
