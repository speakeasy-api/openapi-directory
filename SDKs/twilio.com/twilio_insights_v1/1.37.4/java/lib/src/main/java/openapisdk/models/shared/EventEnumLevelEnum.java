package openapisdk.models.shared;


public enum EventEnumLevelEnum {
    UNKNOWN("UNKNOWN"),
    DEBUG("DEBUG"),
    INFO("INFO"),
    WARNING("WARNING"),
    ERROR("ERROR");

    public final String value;

    private EventEnumLevelEnum(String value) {
        this.value = value;
    }
}
