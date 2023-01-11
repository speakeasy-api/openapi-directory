package openapisdk.models.operations;


public enum SearchImagesSortEnum {
    NEWEST("newest"),
    POPULAR("popular"),
    RELEVANCE("relevance"),
    RANDOM("random");

    public final String value;

    private SearchImagesSortEnum(String value) {
        this.value = value;
    }
}
