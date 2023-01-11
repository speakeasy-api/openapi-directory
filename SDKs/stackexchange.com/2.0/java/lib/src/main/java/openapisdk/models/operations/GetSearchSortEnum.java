package openapisdk.models.operations;


public enum GetSearchSortEnum {
    ACTIVITY("activity"),
    CREATION("creation"),
    VOTES("votes"),
    RELEVANCE("relevance");

    public final String value;

    private GetSearchSortEnum(String value) {
        this.value = value;
    }
}
