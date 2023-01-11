package openapisdk.models.operations;


public enum GetSimilarSortEnum {
    ACTIVITY("activity"),
    CREATION("creation"),
    VOTES("votes"),
    RELEVANCE("relevance");

    public final String value;

    private GetSimilarSortEnum(String value) {
        this.value = value;
    }
}
