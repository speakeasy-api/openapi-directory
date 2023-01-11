package openapisdk.models.operations;


public enum GetSuggestionsTypeEnum {
    ENTITY("entity"),
    CATEGORY("category"),
    PUBLISHER("publisher"),
    DATASET("dataset"),
    QUESTION("question");

    public final String value;

    private GetSuggestionsTypeEnum(String value) {
        this.value = value;
    }
}
