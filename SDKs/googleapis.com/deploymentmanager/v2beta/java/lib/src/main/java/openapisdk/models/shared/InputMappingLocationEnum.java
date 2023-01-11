package openapisdk.models.shared;


public enum InputMappingLocationEnum {
    UNKNOWN("UNKNOWN"),
    PATH("PATH"),
    QUERY("QUERY"),
    BODY("BODY"),
    HEADER("HEADER");

    public final String value;

    private InputMappingLocationEnum(String value) {
        this.value = value;
    }
}
