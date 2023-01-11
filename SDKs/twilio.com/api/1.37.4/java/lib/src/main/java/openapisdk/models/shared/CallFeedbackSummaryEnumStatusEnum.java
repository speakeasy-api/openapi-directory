package openapisdk.models.shared;


public enum CallFeedbackSummaryEnumStatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in-progress"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private CallFeedbackSummaryEnumStatusEnum(String value) {
        this.value = value;
    }
}
