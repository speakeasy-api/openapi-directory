package openapisdk.models.shared;


public enum FileStatusEnum {
    PROCESSING("PROCESSING"),
    REPORT_AVAILABLE("REPORT_AVAILABLE"),
    FAILED("FAILED"),
    CANCELLED("CANCELLED");

    public final String value;

    private FileStatusEnum(String value) {
        this.value = value;
    }
}
