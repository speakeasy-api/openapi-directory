package openapisdk.models.shared;


public enum RequestStatusCreateReportEnum {
    PENDING("PENDING"),
    PROCESSING("PROCESSING"),
    SUCCESS("SUCCESS"),
    ABORTED("ABORTED"),
    FAILED("FAILED"),
    TRUNCATED("TRUNCATED");

    public final String value;

    private RequestStatusCreateReportEnum(String value) {
        this.value = value;
    }
}
