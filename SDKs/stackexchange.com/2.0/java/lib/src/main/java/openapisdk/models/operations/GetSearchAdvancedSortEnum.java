package openapisdk.models.operations;


public enum GetSearchAdvancedSortEnum {
    ACTIVITY("activity"),
    CREATION("creation"),
    VOTES("votes"),
    RELEVANCE("relevance");

    public final String value;

    private GetSearchAdvancedSortEnum(String value) {
        this.value = value;
    }
}
