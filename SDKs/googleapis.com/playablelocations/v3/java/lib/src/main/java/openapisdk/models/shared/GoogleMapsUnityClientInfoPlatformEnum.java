package openapisdk.models.shared;


public enum GoogleMapsUnityClientInfoPlatformEnum {
    PLATFORM_UNSPECIFIED("PLATFORM_UNSPECIFIED"),
    EDITOR("EDITOR"),
    MAC_OS("MAC_OS"),
    WINDOWS("WINDOWS"),
    LINUX("LINUX"),
    ANDROID("ANDROID"),
    IOS("IOS"),
    WEB_GL("WEB_GL");

    public final String value;

    private GoogleMapsUnityClientInfoPlatformEnum(String value) {
        this.value = value;
    }
}
