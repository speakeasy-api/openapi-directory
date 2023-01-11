package openapisdk.models.shared;


public enum SearchAnalyticsQueryRequestSearchTypeEnum {
    WEB("WEB"),
    IMAGE("IMAGE"),
    VIDEO("VIDEO"),
    NEWS("NEWS"),
    DISCOVER("DISCOVER"),
    GOOGLE_NEWS("GOOGLE_NEWS");

    public final String value;

    private SearchAnalyticsQueryRequestSearchTypeEnum(String value) {
        this.value = value;
    }
}
