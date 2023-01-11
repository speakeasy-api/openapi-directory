package openapisdk.models.shared;


public enum GooglePrivacyDlpV2ByteContentItemTypeEnum {
    BYTES_TYPE_UNSPECIFIED("BYTES_TYPE_UNSPECIFIED"),
    IMAGE("IMAGE"),
    IMAGE_JPEG("IMAGE_JPEG"),
    IMAGE_BMP("IMAGE_BMP"),
    IMAGE_PNG("IMAGE_PNG"),
    IMAGE_SVG("IMAGE_SVG"),
    TEXT_UTF8("TEXT_UTF8"),
    WORD_DOCUMENT("WORD_DOCUMENT"),
    PDF("PDF"),
    POWERPOINT_DOCUMENT("POWERPOINT_DOCUMENT"),
    EXCEL_DOCUMENT("EXCEL_DOCUMENT"),
    AVRO("AVRO"),
    CSV("CSV"),
    TSV("TSV");

    public final String value;

    private GooglePrivacyDlpV2ByteContentItemTypeEnum(String value) {
        this.value = value;
    }
}
