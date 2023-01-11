package openapisdk.models.shared;


public enum DynamicLinkEventStatPlatformEnum {
    DYNAMIC_LINK_PLATFORM_UNSPECIFIED("DYNAMIC_LINK_PLATFORM_UNSPECIFIED"),
    ANDROID("ANDROID"),
    IOS("IOS"),
    DESKTOP("DESKTOP"),
    OTHER("OTHER");

    public final String value;

    private DynamicLinkEventStatPlatformEnum(String value) {
        this.value = value;
    }
}
