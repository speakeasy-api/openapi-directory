package openapisdk.models.operations;


public enum GetNamesOfficialSearchSortByEnum {
    RELEVANCE("relevance"),
    NAME("name"),
    FEATURE_TYPE("featureType"),
    DECISION_DATE("decisionDate");

    public final String value;

    private GetNamesOfficialSearchSortByEnum(String value) {
        this.value = value;
    }
}
