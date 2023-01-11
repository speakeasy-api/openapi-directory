package openapisdk.models.shared;


public enum LoggingConfigDriverLogLevelsEnum {
    LEVEL_UNSPECIFIED("LEVEL_UNSPECIFIED"),
    ALL("ALL"),
    TRACE("TRACE"),
    DEBUG("DEBUG"),
    INFO("INFO"),
    WARN("WARN"),
    ERROR("ERROR"),
    FATAL("FATAL"),
    OFF("OFF");

    public final String value;

    private LoggingConfigDriverLogLevelsEnum(String value) {
        this.value = value;
    }
}
