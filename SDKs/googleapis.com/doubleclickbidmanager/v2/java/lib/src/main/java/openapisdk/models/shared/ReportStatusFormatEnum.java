package openapisdk.models.shared;


public enum ReportStatusFormatEnum {
    FORMAT_UNSPECIFIED("FORMAT_UNSPECIFIED"),
    CSV("CSV"),
    XLSX("XLSX");

    public final String value;

    private ReportStatusFormatEnum(String value) {
        this.value = value;
    }
}
