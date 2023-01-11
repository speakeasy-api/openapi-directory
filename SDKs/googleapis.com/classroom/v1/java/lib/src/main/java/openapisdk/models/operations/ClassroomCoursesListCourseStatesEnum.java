package openapisdk.models.operations;


public enum ClassroomCoursesListCourseStatesEnum {
    COURSE_STATE_UNSPECIFIED("COURSE_STATE_UNSPECIFIED"),
    ACTIVE("ACTIVE"),
    ARCHIVED("ARCHIVED"),
    PROVISIONED("PROVISIONED"),
    DECLINED("DECLINED"),
    SUSPENDED("SUSPENDED");

    public final String value;

    private ClassroomCoursesListCourseStatesEnum(String value) {
        this.value = value;
    }
}
