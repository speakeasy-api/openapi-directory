package openapisdk.models.shared;


public enum FirebaseAppInfoPlatformEnum {
    PLATFORM_UNSPECIFIED("PLATFORM_UNSPECIFIED"),
    IOS("IOS"),
    ANDROID("ANDROID"),
    WEB("WEB");

    public final String value;

    private FirebaseAppInfoPlatformEnum(String value) {
        this.value = value;
    }
}
