package openapisdk.models.shared;


public enum LogEntrySeverityEnum {
    DEFAULT_("DEFAULT"),
    DEBUG("DEBUG"),
    INFO("INFO"),
    NOTICE("NOTICE"),
    WARNING("WARNING"),
    ERROR("ERROR"),
    CRITICAL("CRITICAL"),
    ALERT("ALERT"),
    EMERGENCY("EMERGENCY");

    public final String value;

    private LogEntrySeverityEnum(String value) {
        this.value = value;
    }
}
