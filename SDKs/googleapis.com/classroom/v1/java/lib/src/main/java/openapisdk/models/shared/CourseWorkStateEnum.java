package openapisdk.models.shared;


public enum CourseWorkStateEnum {
    COURSE_WORK_STATE_UNSPECIFIED("COURSE_WORK_STATE_UNSPECIFIED"),
    PUBLISHED("PUBLISHED"),
    DRAFT("DRAFT"),
    DELETED("DELETED");

    public final String value;

    private CourseWorkStateEnum(String value) {
        this.value = value;
    }
}
