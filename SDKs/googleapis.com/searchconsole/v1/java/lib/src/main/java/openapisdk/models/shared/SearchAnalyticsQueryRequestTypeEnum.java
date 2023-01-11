package openapisdk.models.shared;


public enum SearchAnalyticsQueryRequestTypeEnum {
    WEB("WEB"),
    IMAGE("IMAGE"),
    VIDEO("VIDEO"),
    NEWS("NEWS"),
    DISCOVER("DISCOVER"),
    GOOGLE_NEWS("GOOGLE_NEWS");

    public final String value;

    private SearchAnalyticsQueryRequestTypeEnum(String value) {
        this.value = value;
    }
}
