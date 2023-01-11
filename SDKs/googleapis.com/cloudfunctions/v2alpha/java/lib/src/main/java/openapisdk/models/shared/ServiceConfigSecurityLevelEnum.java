package openapisdk.models.shared;


public enum ServiceConfigSecurityLevelEnum {
    SECURITY_LEVEL_UNSPECIFIED("SECURITY_LEVEL_UNSPECIFIED"),
    SECURE_ALWAYS("SECURE_ALWAYS"),
    SECURE_OPTIONAL("SECURE_OPTIONAL");

    public final String value;

    private ServiceConfigSecurityLevelEnum(String value) {
        this.value = value;
    }
}
