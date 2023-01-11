package openapisdk.models.shared;


public enum ExportContextFileTypeEnum {
    SQL_FILE_TYPE_UNSPECIFIED("SQL_FILE_TYPE_UNSPECIFIED"),
    SQL("SQL"),
    CSV("CSV"),
    BAK("BAK");

    public final String value;

    private ExportContextFileTypeEnum(String value) {
        this.value = value;
    }
}
