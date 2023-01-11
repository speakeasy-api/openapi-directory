package openapisdk.models.shared;


public enum GoogleChromeManagementV1BrowserVersionSystemEnum {
    DEVICE_SYSTEM_UNSPECIFIED("DEVICE_SYSTEM_UNSPECIFIED"),
    SYSTEM_OTHER("SYSTEM_OTHER"),
    SYSTEM_ANDROID("SYSTEM_ANDROID"),
    SYSTEM_IOS("SYSTEM_IOS"),
    SYSTEM_CROS("SYSTEM_CROS"),
    SYSTEM_WINDOWS("SYSTEM_WINDOWS"),
    SYSTEM_MAC("SYSTEM_MAC"),
    SYSTEM_LINUX("SYSTEM_LINUX");

    public final String value;

    private GoogleChromeManagementV1BrowserVersionSystemEnum(String value) {
        this.value = value;
    }
}
