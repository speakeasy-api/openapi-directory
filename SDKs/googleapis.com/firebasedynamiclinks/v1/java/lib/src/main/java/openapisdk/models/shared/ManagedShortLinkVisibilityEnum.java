package openapisdk.models.shared;


public enum ManagedShortLinkVisibilityEnum {
    UNSPECIFIED_VISIBILITY("UNSPECIFIED_VISIBILITY"),
    UNARCHIVED("UNARCHIVED"),
    ARCHIVED("ARCHIVED"),
    NEVER_SHOWN("NEVER_SHOWN");

    public final String value;

    private ManagedShortLinkVisibilityEnum(String value) {
        this.value = value;
    }
}
