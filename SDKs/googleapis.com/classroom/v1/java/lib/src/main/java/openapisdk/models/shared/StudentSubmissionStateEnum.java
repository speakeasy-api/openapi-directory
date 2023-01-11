package openapisdk.models.shared;


public enum StudentSubmissionStateEnum {
    SUBMISSION_STATE_UNSPECIFIED("SUBMISSION_STATE_UNSPECIFIED"),
    NEW_("NEW"),
    CREATED("CREATED"),
    TURNED_IN("TURNED_IN"),
    RETURNED("RETURNED"),
    RECLAIMED_BY_STUDENT("RECLAIMED_BY_STUDENT");

    public final String value;

    private StudentSubmissionStateEnum(String value) {
        this.value = value;
    }
}
