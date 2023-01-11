package openapisdk.models.shared;


public enum CheckSuiteStatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in_progress"),
    COMPLETED("completed");

    public final String value;

    private CheckSuiteStatusEnum(String value) {
        this.value = value;
    }
}
