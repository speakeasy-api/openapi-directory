package openapisdk.models.shared;


public enum GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum {
    PLATFORM_TYPE_UNSPECIFIED("PLATFORM_TYPE_UNSPECIFIED"),
    WINDOWS("WINDOWS"),
    LINUX("LINUX"),
    ANDROID("ANDROID"),
    OSX("OSX"),
    IOS("IOS"),
    ANY_PLATFORM("ANY_PLATFORM"),
    ALL_PLATFORMS("ALL_PLATFORMS"),
    CHROME("CHROME");

    public final String value;

    private GoogleSecuritySafebrowsingV4ThreatListDescriptorPlatformTypeEnum(String value) {
        this.value = value;
    }
}
