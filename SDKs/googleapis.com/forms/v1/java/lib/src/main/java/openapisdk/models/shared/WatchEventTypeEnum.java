package openapisdk.models.shared;


public enum WatchEventTypeEnum {
    EVENT_TYPE_UNSPECIFIED("EVENT_TYPE_UNSPECIFIED"),
    SCHEMA("SCHEMA"),
    RESPONSES("RESPONSES");

    public final String value;

    private WatchEventTypeEnum(String value) {
        this.value = value;
    }
}
