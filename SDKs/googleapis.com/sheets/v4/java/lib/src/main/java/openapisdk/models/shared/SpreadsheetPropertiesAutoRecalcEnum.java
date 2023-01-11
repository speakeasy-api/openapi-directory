package openapisdk.models.shared;


public enum SpreadsheetPropertiesAutoRecalcEnum {
    RECALCULATION_INTERVAL_UNSPECIFIED("RECALCULATION_INTERVAL_UNSPECIFIED"),
    ON_CHANGE("ON_CHANGE"),
    MINUTE("MINUTE"),
    HOUR("HOUR");

    public final String value;

    private SpreadsheetPropertiesAutoRecalcEnum(String value) {
        this.value = value;
    }
}
