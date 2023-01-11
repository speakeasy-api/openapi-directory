package openapisdk.models.shared;


public enum CourseWorkAssigneeModeEnum {
    ASSIGNEE_MODE_UNSPECIFIED("ASSIGNEE_MODE_UNSPECIFIED"),
    ALL_STUDENTS("ALL_STUDENTS"),
    INDIVIDUAL_STUDENTS("INDIVIDUAL_STUDENTS");

    public final String value;

    private CourseWorkAssigneeModeEnum(String value) {
        this.value = value;
    }
}
