package openapisdk.models.shared;


public enum CaseStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    NEW_("NEW"),
    IN_PROGRESS_GOOGLE_SUPPORT("IN_PROGRESS_GOOGLE_SUPPORT"),
    ACTION_REQUIRED("ACTION_REQUIRED"),
    SOLUTION_PROVIDED("SOLUTION_PROVIDED"),
    CLOSED("CLOSED");

    public final String value;

    private CaseStateEnum(String value) {
        this.value = value;
    }
}
