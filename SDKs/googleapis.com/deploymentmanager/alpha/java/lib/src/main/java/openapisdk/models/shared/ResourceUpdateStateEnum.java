package openapisdk.models.shared;


public enum ResourceUpdateStateEnum {
    PENDING("PENDING"),
    IN_PROGRESS("IN_PROGRESS"),
    IN_PREVIEW("IN_PREVIEW"),
    FAILED("FAILED"),
    ABORTED("ABORTED");

    public final String value;

    private ResourceUpdateStateEnum(String value) {
        this.value = value;
    }
}
