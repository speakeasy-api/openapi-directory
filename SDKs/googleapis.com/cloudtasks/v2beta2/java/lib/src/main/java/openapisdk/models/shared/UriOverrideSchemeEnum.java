package openapisdk.models.shared;


public enum UriOverrideSchemeEnum {
    SCHEME_UNSPECIFIED("SCHEME_UNSPECIFIED"),
    HTTP("HTTP"),
    HTTPS("HTTPS");

    public final String value;

    private UriOverrideSchemeEnum(String value) {
        this.value = value;
    }
}
