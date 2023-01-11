package openapisdk.models.shared;


public enum DeviceDeviceTypeEnum {
    DEVICE_TYPE_UNSPECIFIED("DEVICE_TYPE_UNSPECIFIED"),
    ANDROID("ANDROID"),
    IOS("IOS"),
    GOOGLE_SYNC("GOOGLE_SYNC"),
    WINDOWS("WINDOWS"),
    MAC_OS("MAC_OS"),
    LINUX("LINUX"),
    CHROME_OS("CHROME_OS");

    public final String value;

    private DeviceDeviceTypeEnum(String value) {
        this.value = value;
    }
}
