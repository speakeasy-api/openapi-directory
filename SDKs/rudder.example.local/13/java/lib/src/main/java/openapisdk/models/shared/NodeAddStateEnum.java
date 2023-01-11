package openapisdk.models.shared;


public enum NodeAddStateEnum {
    ENABLE("enable"),
    IGNORED("ignored"),
    EMPTY_POLICIES("empty-policies"),
    INITIALIZING("initializing"),
    PREPARING_EOL("preparing-eol");

    public final String value;

    private NodeAddStateEnum(String value) {
        this.value = value;
    }
}
