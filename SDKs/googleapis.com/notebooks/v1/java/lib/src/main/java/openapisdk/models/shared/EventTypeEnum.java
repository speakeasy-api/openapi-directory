package openapisdk.models.shared;


public enum EventTypeEnum {
    EVENT_TYPE_UNSPECIFIED("EVENT_TYPE_UNSPECIFIED"),
    IDLE("IDLE"),
    HEARTBEAT("HEARTBEAT"),
    HEALTH("HEALTH"),
    MAINTENANCE("MAINTENANCE");

    public final String value;

    private EventTypeEnum(String value) {
        this.value = value;
    }
}
