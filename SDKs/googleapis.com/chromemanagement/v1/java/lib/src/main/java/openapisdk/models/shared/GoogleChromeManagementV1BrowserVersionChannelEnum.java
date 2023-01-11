package openapisdk.models.shared;


public enum GoogleChromeManagementV1BrowserVersionChannelEnum {
    RELEASE_CHANNEL_UNSPECIFIED("RELEASE_CHANNEL_UNSPECIFIED"),
    CANARY("CANARY"),
    DEV("DEV"),
    BETA("BETA"),
    STABLE("STABLE");

    public final String value;

    private GoogleChromeManagementV1BrowserVersionChannelEnum(String value) {
        this.value = value;
    }
}
