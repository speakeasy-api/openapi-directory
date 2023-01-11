package openapisdk.models.operations;


public enum SearchFreetextRequestBodySearchTypesEnum {
    PRODUCT("PRODUCT"),
    DESTINATION("DESTINATION"),
    ATTRACTION("ATTRACTION"),
    RECOMMENDATION("RECOMMENDATION");

    public final String value;

    private SearchFreetextRequestBodySearchTypesEnum(String value) {
        this.value = value;
    }
}
