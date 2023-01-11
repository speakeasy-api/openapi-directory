package openapisdk.models.operations;


public enum GetNamesSearchSortByEnum {
    RELEVANCE("relevance"),
    NAME("name"),
    FEATURE_TYPE("featureType"),
    DECISION_DATE("decisionDate");

    public final String value;

    private GetNamesSearchSortByEnum(String value) {
        this.value = value;
    }
}
