package openapisdk.models.shared;


public enum ReportStatusFormatEnum {
    CSV("CSV"),
    EXCEL_CSV("EXCEL_CSV"),
    XLSX("XLSX");

    public final String value;

    private ReportStatusFormatEnum(String value) {
        this.value = value;
    }
}
