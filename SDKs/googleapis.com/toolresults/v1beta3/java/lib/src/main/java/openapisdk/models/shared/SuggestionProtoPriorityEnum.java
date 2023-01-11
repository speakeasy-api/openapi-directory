package openapisdk.models.shared;


public enum SuggestionProtoPriorityEnum {
    UNKNOWN_PRIORITY("unknownPriority"),
    ERROR("error"),
    WARNING("warning"),
    INFO("info");

    public final String value;

    private SuggestionProtoPriorityEnum(String value) {
        this.value = value;
    }
}
