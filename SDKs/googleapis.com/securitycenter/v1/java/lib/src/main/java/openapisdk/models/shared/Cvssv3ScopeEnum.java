package openapisdk.models.shared;


public enum Cvssv3ScopeEnum {
    SCOPE_UNSPECIFIED("SCOPE_UNSPECIFIED"),
    SCOPE_UNCHANGED("SCOPE_UNCHANGED"),
    SCOPE_CHANGED("SCOPE_CHANGED");

    public final String value;

    private Cvssv3ScopeEnum(String value) {
        this.value = value;
    }
}
