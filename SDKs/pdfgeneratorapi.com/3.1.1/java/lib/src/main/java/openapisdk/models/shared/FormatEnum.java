package openapisdk.models.shared;


public enum FormatEnum {
    PDF("pdf"),
    HTML("html"),
    ZIP("zip"),
    XLSX("xlsx");

    public final String value;

    private FormatEnum(String value) {
        this.value = value;
    }
}
