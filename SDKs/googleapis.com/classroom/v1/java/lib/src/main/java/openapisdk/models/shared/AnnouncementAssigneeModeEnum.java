package openapisdk.models.shared;


public enum AnnouncementAssigneeModeEnum {
    ASSIGNEE_MODE_UNSPECIFIED("ASSIGNEE_MODE_UNSPECIFIED"),
    ALL_STUDENTS("ALL_STUDENTS"),
    INDIVIDUAL_STUDENTS("INDIVIDUAL_STUDENTS");

    public final String value;

    private AnnouncementAssigneeModeEnum(String value) {
        this.value = value;
    }
}
