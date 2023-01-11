package openapisdk.models.shared;


public enum CopyPasteRequestPasteTypeEnum {
    PASTE_NORMAL("PASTE_NORMAL"),
    PASTE_VALUES("PASTE_VALUES"),
    PASTE_FORMAT("PASTE_FORMAT"),
    PASTE_NO_BORDERS("PASTE_NO_BORDERS"),
    PASTE_FORMULA("PASTE_FORMULA"),
    PASTE_DATA_VALIDATION("PASTE_DATA_VALIDATION"),
    PASTE_CONDITIONAL_FORMATTING("PASTE_CONDITIONAL_FORMATTING");

    public final String value;

    private CopyPasteRequestPasteTypeEnum(String value) {
        this.value = value;
    }
}
