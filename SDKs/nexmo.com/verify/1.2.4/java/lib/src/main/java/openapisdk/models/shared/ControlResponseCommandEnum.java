package openapisdk.models.shared;


public enum ControlResponseCommandEnum {
    CANCEL("cancel"),
    TRIGGER_NEXT_EVENT("trigger_next_event");

    public final String value;

    private ControlResponseCommandEnum(String value) {
        this.value = value;
    }
}
