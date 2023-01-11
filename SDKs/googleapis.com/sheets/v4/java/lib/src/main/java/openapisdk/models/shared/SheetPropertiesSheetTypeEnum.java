package openapisdk.models.shared;


public enum SheetPropertiesSheetTypeEnum {
    SHEET_TYPE_UNSPECIFIED("SHEET_TYPE_UNSPECIFIED"),
    GRID("GRID"),
    OBJECT("OBJECT"),
    DATA_SOURCE("DATA_SOURCE");

    public final String value;

    private SheetPropertiesSheetTypeEnum(String value) {
        this.value = value;
    }
}
