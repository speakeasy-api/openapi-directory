package openapisdk.models.shared;


public enum TextEntryTypeEnum {
    TEXT_TYPE_UNSPECIFIED("TEXT_TYPE_UNSPECIFIED"),
    PLAIN_TEXT("PLAIN_TEXT"),
    HTML("HTML");

    public final String value;

    private TextEntryTypeEnum(String value) {
        this.value = value;
    }
}
