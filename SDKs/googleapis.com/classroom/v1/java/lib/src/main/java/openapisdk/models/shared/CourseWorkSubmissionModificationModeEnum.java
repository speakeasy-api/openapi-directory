package openapisdk.models.shared;


public enum CourseWorkSubmissionModificationModeEnum {
    SUBMISSION_MODIFICATION_MODE_UNSPECIFIED("SUBMISSION_MODIFICATION_MODE_UNSPECIFIED"),
    MODIFIABLE_UNTIL_TURNED_IN("MODIFIABLE_UNTIL_TURNED_IN"),
    MODIFIABLE("MODIFIABLE");

    public final String value;

    private CourseWorkSubmissionModificationModeEnum(String value) {
        this.value = value;
    }
}
