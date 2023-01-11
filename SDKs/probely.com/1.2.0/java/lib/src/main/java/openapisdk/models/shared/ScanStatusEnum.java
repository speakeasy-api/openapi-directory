package openapisdk.models.shared;


public enum ScanStatusEnum {
    QUEUED("queued"),
    STARTED("started"),
    UNDER_REVIEW("under_review"),
    COMPLETED("completed"),
    COMPLETED_WITH_ERRORS("completed_with_errors"),
    FAILED("failed"),
    CANCELED("canceled"),
    CANCELING("canceling");

    public final String value;

    private ScanStatusEnum(String value) {
        this.value = value;
    }
}
