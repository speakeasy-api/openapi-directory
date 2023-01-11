package openapisdk.models.shared;


public enum ServingConfigTrailingSlashBehaviorEnum {
    TRAILING_SLASH_BEHAVIOR_UNSPECIFIED("TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"),
    ADD("ADD"),
    REMOVE("REMOVE");

    public final String value;

    private ServingConfigTrailingSlashBehaviorEnum(String value) {
        this.value = value;
    }
}
