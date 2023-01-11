package openapisdk.models.shared;


public enum ReauthSettingsMethodEnum {
    METHOD_UNSPECIFIED("METHOD_UNSPECIFIED"),
    LOGIN("LOGIN"),
    SECURE_KEY("SECURE_KEY"),
    ENROLLED_SECOND_FACTORS("ENROLLED_SECOND_FACTORS");

    public final String value;

    private ReauthSettingsMethodEnum(String value) {
        this.value = value;
    }
}
