package openapisdk.models.shared;


public enum FileFormatEnum {
    CSV("CSV"),
    EXCEL("EXCEL");

    public final String value;

    private FileFormatEnum(String value) {
        this.value = value;
    }
}
