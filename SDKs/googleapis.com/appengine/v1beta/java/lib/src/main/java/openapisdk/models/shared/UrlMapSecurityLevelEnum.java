package openapisdk.models.shared;


public enum UrlMapSecurityLevelEnum {
    SECURE_UNSPECIFIED("SECURE_UNSPECIFIED"),
    SECURE_DEFAULT("SECURE_DEFAULT"),
    SECURE_NEVER("SECURE_NEVER"),
    SECURE_OPTIONAL("SECURE_OPTIONAL"),
    SECURE_ALWAYS("SECURE_ALWAYS");

    public final String value;

    private UrlMapSecurityLevelEnum(String value) {
        this.value = value;
    }
}
