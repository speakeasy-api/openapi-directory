package openapisdk.models.operations;


public enum ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum {
    SUBMISSION_STATE_UNSPECIFIED("SUBMISSION_STATE_UNSPECIFIED"),
    NEW_("NEW"),
    CREATED("CREATED"),
    TURNED_IN("TURNED_IN"),
    RETURNED("RETURNED"),
    RECLAIMED_BY_STUDENT("RECLAIMED_BY_STUDENT");

    public final String value;

    private ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum(String value) {
        this.value = value;
    }
}
