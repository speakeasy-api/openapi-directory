package openapisdk.models.shared;


public enum AnnouncementStateEnum {
    ANNOUNCEMENT_STATE_UNSPECIFIED("ANNOUNCEMENT_STATE_UNSPECIFIED"),
    PUBLISHED("PUBLISHED"),
    DRAFT("DRAFT"),
    DELETED("DELETED");

    public final String value;

    private AnnouncementStateEnum(String value) {
        this.value = value;
    }
}
