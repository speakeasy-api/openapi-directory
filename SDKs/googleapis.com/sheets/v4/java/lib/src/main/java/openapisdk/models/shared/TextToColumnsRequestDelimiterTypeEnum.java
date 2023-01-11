package openapisdk.models.shared;


public enum TextToColumnsRequestDelimiterTypeEnum {
    DELIMITER_TYPE_UNSPECIFIED("DELIMITER_TYPE_UNSPECIFIED"),
    COMMA("COMMA"),
    SEMICOLON("SEMICOLON"),
    PERIOD("PERIOD"),
    SPACE("SPACE"),
    CUSTOM("CUSTOM"),
    AUTODETECT("AUTODETECT");

    public final String value;

    private TextToColumnsRequestDelimiterTypeEnum(String value) {
        this.value = value;
    }
}
