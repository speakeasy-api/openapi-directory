package openapisdk.models.shared;


public enum SearchAnalyticsQueryRequestDimensionsEnum {
    DATE("DATE"),
    QUERY("QUERY"),
    PAGE("PAGE"),
    COUNTRY("COUNTRY"),
    DEVICE("DEVICE"),
    SEARCH_APPEARANCE("SEARCH_APPEARANCE");

    public final String value;

    private SearchAnalyticsQueryRequestDimensionsEnum(String value) {
        this.value = value;
    }
}
