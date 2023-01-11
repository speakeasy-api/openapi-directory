package openapisdk.models.shared;


public enum JobInfoJobInfoJobStatusEnum {
    NEW_("New"),
    PENDING("Pending"),
    IN_PROGRESS("InProgress"),
    SUCCESS("Success"),
    FAILED("Failed"),
    ON_HOLD("OnHold");

    public final String value;

    private JobInfoJobInfoJobStatusEnum(String value) {
        this.value = value;
    }
}
