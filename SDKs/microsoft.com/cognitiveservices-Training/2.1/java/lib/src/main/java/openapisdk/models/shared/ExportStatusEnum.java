package openapisdk.models.shared;


public enum ExportStatusEnum {
    EXPORTING("Exporting"),
    FAILED("Failed"),
    DONE("Done");

    public final String value;

    private ExportStatusEnum(String value) {
        this.value = value;
    }
}
