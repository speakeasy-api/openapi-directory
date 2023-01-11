package openapisdk.models.shared;


public enum SuggestionClusterProtoCategoryEnum {
    UNKNOWN_CATEGORY("unknownCategory"),
    CONTENT_LABELING("contentLabeling"),
    TOUCH_TARGET_SIZE("touchTargetSize"),
    LOW_CONTRAST("lowContrast"),
    IMPLEMENTATION("implementation");

    public final String value;

    private SuggestionClusterProtoCategoryEnum(String value) {
        this.value = value;
    }
}
