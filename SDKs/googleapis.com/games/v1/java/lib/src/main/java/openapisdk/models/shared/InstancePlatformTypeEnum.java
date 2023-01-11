package openapisdk.models.shared;


public enum InstancePlatformTypeEnum {
    PLATFORM_TYPE_UNSPECIFIED("PLATFORM_TYPE_UNSPECIFIED"),
    ANDROID("ANDROID"),
    IOS("IOS"),
    WEB_APP("WEB_APP");

    public final String value;

    private InstancePlatformTypeEnum(String value) {
        this.value = value;
    }
}
