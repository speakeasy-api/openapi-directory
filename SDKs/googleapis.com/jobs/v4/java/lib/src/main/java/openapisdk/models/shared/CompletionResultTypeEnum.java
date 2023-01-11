package openapisdk.models.shared;


public enum CompletionResultTypeEnum {
    COMPLETION_TYPE_UNSPECIFIED("COMPLETION_TYPE_UNSPECIFIED"),
    JOB_TITLE("JOB_TITLE"),
    COMPANY_NAME("COMPANY_NAME"),
    COMBINED("COMBINED");

    public final String value;

    private CompletionResultTypeEnum(String value) {
        this.value = value;
    }
}
