package openapisdk.models.operations;


public enum GetQuestionsSortEnum {
    ACTIVITY("activity"),
    CREATION("creation"),
    VOTES("votes"),
    HOT("hot"),
    WEEK("week"),
    MONTH("month"),
    RELEVANCE("relevance");

    public final String value;

    private GetQuestionsSortEnum(String value) {
        this.value = value;
    }
}
