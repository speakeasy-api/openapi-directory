package openapisdk.models.shared;


public enum WmxSitemapContentTypeEnum {
    WEB("WEB"),
    IMAGE("IMAGE"),
    VIDEO("VIDEO"),
    NEWS("NEWS"),
    MOBILE("MOBILE"),
    ANDROID_APP("ANDROID_APP"),
    PATTERN("PATTERN"),
    IOS_APP("IOS_APP"),
    DATA_FEED_ELEMENT("DATA_FEED_ELEMENT");

    public final String value;

    private WmxSitemapContentTypeEnum(String value) {
        this.value = value;
    }
}
