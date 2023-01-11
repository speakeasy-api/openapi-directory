package openapisdk.models.shared;


public enum RequestStatusEnum {
    PENDING("PENDING"),
    PROCESSING("PROCESSING"),
    SUCCESS("SUCCESS"),
    ABORTED("ABORTED"),
    FAILED("FAILED"),
    TRUNCATED("TRUNCATED");

    public final String value;

    private RequestStatusEnum(String value) {
        this.value = value;
    }
}
