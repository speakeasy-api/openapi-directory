package openapisdk.models.operations;


public enum GetNamesNotOfficialSearchSortByEnum {
    RELEVANCE("relevance"),
    NAME("name"),
    FEATURE_TYPE("featureType"),
    DECISION_DATE("decisionDate");

    public final String value;

    private GetNamesNotOfficialSearchSortByEnum(String value) {
        this.value = value;
    }
}
