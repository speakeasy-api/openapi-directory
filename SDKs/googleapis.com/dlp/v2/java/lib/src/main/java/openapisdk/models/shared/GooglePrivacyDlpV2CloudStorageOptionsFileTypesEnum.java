package openapisdk.models.shared;


public enum GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum {
    FILE_TYPE_UNSPECIFIED("FILE_TYPE_UNSPECIFIED"),
    BINARY_FILE("BINARY_FILE"),
    TEXT_FILE("TEXT_FILE"),
    IMAGE("IMAGE"),
    WORD("WORD"),
    PDF("PDF"),
    AVRO("AVRO"),
    CSV("CSV"),
    TSV("TSV"),
    POWERPOINT("POWERPOINT"),
    EXCEL("EXCEL");

    public final String value;

    private GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum(String value) {
        this.value = value;
    }
}
