package openapisdk.models.shared;


public enum ModifyCourseWorkAssigneesRequestAssigneeModeEnum {
    ASSIGNEE_MODE_UNSPECIFIED("ASSIGNEE_MODE_UNSPECIFIED"),
    ALL_STUDENTS("ALL_STUDENTS"),
    INDIVIDUAL_STUDENTS("INDIVIDUAL_STUDENTS");

    public final String value;

    private ModifyCourseWorkAssigneesRequestAssigneeModeEnum(String value) {
        this.value = value;
    }
}
