package openapisdk.models.shared;


public enum AttributePropagationSettingsOutputCredentialsEnum {
    OUTPUT_CREDENTIALS_UNSPECIFIED("OUTPUT_CREDENTIALS_UNSPECIFIED"),
    HEADER("HEADER"),
    JWT("JWT"),
    RCTOKEN("RCTOKEN");

    public final String value;

    private AttributePropagationSettingsOutputCredentialsEnum(String value) {
        this.value = value;
    }
}
