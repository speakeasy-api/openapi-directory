package openapisdk.models.shared;


public enum EntryPointParameterTypeEnum {
    QUERY("query"),
    HEADER("header"),
    URI("uri"),
    PATH("path"),
    BODY("body");

    public final String value;

    private EntryPointParameterTypeEnum(String value) {
        this.value = value;
    }
}
