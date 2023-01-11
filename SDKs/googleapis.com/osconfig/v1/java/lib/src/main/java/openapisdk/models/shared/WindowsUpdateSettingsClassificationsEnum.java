package openapisdk.models.shared;


public enum WindowsUpdateSettingsClassificationsEnum {
    CLASSIFICATION_UNSPECIFIED("CLASSIFICATION_UNSPECIFIED"),
    CRITICAL("CRITICAL"),
    SECURITY("SECURITY"),
    DEFINITION("DEFINITION"),
    DRIVER("DRIVER"),
    FEATURE_PACK("FEATURE_PACK"),
    SERVICE_PACK("SERVICE_PACK"),
    TOOL("TOOL"),
    UPDATE_ROLLUP("UPDATE_ROLLUP"),
    UPDATE("UPDATE");

    public final String value;

    private WindowsUpdateSettingsClassificationsEnum(String value) {
        this.value = value;
    }
}
