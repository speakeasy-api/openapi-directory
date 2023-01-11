package openapisdk.models.shared;


public enum CourseCourseStateEnum {
    COURSE_STATE_UNSPECIFIED("COURSE_STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    ARCHIVED("ARCHIVED"),
    PROVISIONED("PROVISIONED"),
    DECLINED("DECLINED"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private CourseCourseStateEnum(String value) {
        this.value = value;
    }
}
