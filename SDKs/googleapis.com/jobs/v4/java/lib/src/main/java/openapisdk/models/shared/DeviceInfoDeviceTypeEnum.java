package openapisdk.models.shared;


public enum DeviceInfoDeviceTypeEnum {
    DEVICE_TYPE_UNSPECIFIED("DEVICE_TYPE_UNSPECIFIED"),
    WEB("WEB"),
    MOBILE_WEB("MOBILE_WEB"),
    ANDROID("ANDROID"),
    IOS("IOS"),
    BOT("BOT"),
    OTHER("OTHER");

    public final String value;

    private DeviceInfoDeviceTypeEnum(String value) {
        this.value = value;
    }
}
