package openapisdk.models.shared;


public enum ExportStatusEnum {
    EXPORT_STATUS_UNSPECIFIED("EXPORT_STATUS_UNSPECIFIED"),
    COMPLETED("COMPLETED"),
    FAILED("FAILED"),
    IN_PROGRESS("IN_PROGRESS");

    public final String value;

    private ExportStatusEnum(String value) {
        this.value = value;
    }
}
