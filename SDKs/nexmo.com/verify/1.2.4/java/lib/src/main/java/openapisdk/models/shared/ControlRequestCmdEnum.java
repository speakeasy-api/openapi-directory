package openapisdk.models.shared;


public enum ControlRequestCmdEnum {
    CANCEL("cancel"),
    TRIGGER_NEXT_EVENT("trigger_next_event");

    public final String value;

    private ControlRequestCmdEnum(String value) {
        this.value = value;
    }
}
