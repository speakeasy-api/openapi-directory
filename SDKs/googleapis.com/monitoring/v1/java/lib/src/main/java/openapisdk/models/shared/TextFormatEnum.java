package openapisdk.models.shared;


public enum TextFormatEnum {
    FORMAT_UNSPECIFIED("FORMAT_UNSPECIFIED"),
    MARKDOWN("MARKDOWN"),
    RAW("RAW");

    public final String value;

    private TextFormatEnum(String value) {
        this.value = value;
    }
}
