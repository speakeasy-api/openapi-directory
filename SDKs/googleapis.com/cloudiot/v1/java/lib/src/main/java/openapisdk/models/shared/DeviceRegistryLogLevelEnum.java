package openapisdk.models.shared;


public enum DeviceRegistryLogLevelEnum {
    LOG_LEVEL_UNSPECIFIED("LOG_LEVEL_UNSPECIFIED"),
    NONE("NONE"),
    ERROR("ERROR"),
    INFO("INFO"),
    DEBUG("DEBUG");

    public final String value;

    private DeviceRegistryLogLevelEnum(String value) {
        this.value = value;
    }
}
