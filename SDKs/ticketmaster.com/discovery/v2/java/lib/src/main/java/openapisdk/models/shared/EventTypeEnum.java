package openapisdk.models.shared;


public enum EventTypeEnum {
    EVENT("event"),
    VENUE("venue"),
    ATTRACTION("attraction");

    public final String value;

    private EventTypeEnum(String value) {
        this.value = value;
    }
}
