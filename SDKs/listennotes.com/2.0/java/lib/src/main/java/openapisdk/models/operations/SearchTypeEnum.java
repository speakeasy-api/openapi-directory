package openapisdk.models.operations;


public enum SearchTypeEnum {
    EPISODE("episode"),
    PODCAST("podcast"),
    CURATED("curated");

    public final String value;

    private SearchTypeEnum(String value) {
        this.value = value;
    }
}
