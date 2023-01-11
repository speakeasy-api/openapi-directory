package openapisdk.models.shared;


public enum ChangelogTypeEnum {
    UNKNOWN(""),
    ADDED("added"),
    FIXED("fixed"),
    IMPROVED("improved"),
    DEPRECATED("deprecated"),
    REMOVED("removed");

    public final String value;

    private ChangelogTypeEnum(String value) {
        this.value = value;
    }
}
