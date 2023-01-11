package openapisdk.models.shared;


public enum QueryMetadataFormatEnum {
    CSV("CSV"),
    EXCEL_CSV("EXCEL_CSV"),
    XLSX("XLSX");

    public final String value;

    private QueryMetadataFormatEnum(String value) {
        this.value = value;
    }
}
