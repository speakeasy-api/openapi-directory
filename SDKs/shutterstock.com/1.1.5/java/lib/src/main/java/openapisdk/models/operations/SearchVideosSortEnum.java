package openapisdk.models.operations;


public enum SearchVideosSortEnum {
    NEWEST("newest"),
    POPULAR("popular"),
    RELEVANCE("relevance"),
    RANDOM("random");

    public final String value;

    private SearchVideosSortEnum(String value) {
        this.value = value;
    }
}
