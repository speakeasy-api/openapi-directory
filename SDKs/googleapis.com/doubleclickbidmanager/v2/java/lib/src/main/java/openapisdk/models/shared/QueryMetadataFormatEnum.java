package openapisdk.models.shared;


public enum QueryMetadataFormatEnum {
    FORMAT_UNSPECIFIED("FORMAT_UNSPECIFIED"),
    CSV("CSV"),
    XLSX("XLSX");

    public final String value;

    private QueryMetadataFormatEnum(String value) {
        this.value = value;
    }
}
