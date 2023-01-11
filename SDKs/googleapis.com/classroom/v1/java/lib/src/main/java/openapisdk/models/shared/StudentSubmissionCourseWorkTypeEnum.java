package openapisdk.models.shared;


public enum StudentSubmissionCourseWorkTypeEnum {
    COURSE_WORK_TYPE_UNSPECIFIED("COURSE_WORK_TYPE_UNSPECIFIED"),
    ASSIGNMENT("ASSIGNMENT"),
    SHORT_ANSWER_QUESTION("SHORT_ANSWER_QUESTION"),
    MULTIPLE_CHOICE_QUESTION("MULTIPLE_CHOICE_QUESTION");

    public final String value;

    private StudentSubmissionCourseWorkTypeEnum(String value) {
        this.value = value;
    }
}
