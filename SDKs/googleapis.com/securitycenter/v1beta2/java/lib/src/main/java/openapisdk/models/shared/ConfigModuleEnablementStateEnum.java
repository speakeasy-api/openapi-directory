package openapisdk.models.shared;


public enum ConfigModuleEnablementStateEnum {
    ENABLEMENT_STATE_UNSPECIFIED("ENABLEMENT_STATE_UNSPECIFIED"),
    INHERITED("INHERITED"),
    ENABLED("ENABLED"),
    DISABLED("DISABLED");

    public final String value;

    private ConfigModuleEnablementStateEnum(String value) {
        this.value = value;
    }
}
