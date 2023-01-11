package openapisdk.models.shared;


public enum NodeSettingsStateEnum {
    ENABLED("enabled"),
    IGNORED("ignored"),
    EMPTY_POLICIES("empty-policies"),
    INITIALIZING("initializing"),
    PREPARING_EOL("preparing-eol");

    public final String value;

    private NodeSettingsStateEnum(String value) {
        this.value = value;
    }
}
