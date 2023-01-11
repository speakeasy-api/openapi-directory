package openapisdk.models.shared;


public enum SearchFreetextResponseSearchTypeEnum {
    PRODUCT("PRODUCT"),
    DESTINATION("DESTINATION"),
    ATTRACTION("ATTRACTION"),
    RECOMMENDATION("RECOMMENDATION");

    public final String value;

    private SearchFreetextResponseSearchTypeEnum(String value) {
        this.value = value;
    }
}
