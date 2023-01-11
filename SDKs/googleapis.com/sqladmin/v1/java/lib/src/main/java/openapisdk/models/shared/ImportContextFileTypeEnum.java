package openapisdk.models.shared;


public enum ImportContextFileTypeEnum {
    SQL_FILE_TYPE_UNSPECIFIED("SQL_FILE_TYPE_UNSPECIFIED"),
    SQL("SQL"),
    CSV("CSV"),
    BAK("BAK");

    public final String value;

    private ImportContextFileTypeEnum(String value) {
        this.value = value;
    }
}
