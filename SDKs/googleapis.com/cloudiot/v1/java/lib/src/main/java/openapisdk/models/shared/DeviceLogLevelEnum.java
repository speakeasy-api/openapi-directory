package openapisdk.models.shared;


public enum DeviceLogLevelEnum {
    LOG_LEVEL_UNSPECIFIED("LOG_LEVEL_UNSPECIFIED"),
    NONE("NONE"),
    ERROR("ERROR"),
    INFO("INFO"),
    DEBUG("DEBUG");

    public final String value;

    private DeviceLogLevelEnum(String value) {
        this.value = value;
    }
}
