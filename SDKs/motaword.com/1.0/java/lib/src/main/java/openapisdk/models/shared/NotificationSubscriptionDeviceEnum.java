package openapisdk.models.shared;


public enum NotificationSubscriptionDeviceEnum {
    I_OS("iOS"),
    ANDROID("Android"),
    CHROME("Chrome"),
    FIREFOX("Firefox"),
    SAFARI("Safari"),
    EDGE("Edge"),
    AMAZON("Amazon"),
    WINDOWS_PHONE("WindowsPhone"),
    WINDOWS("Windows"),
    MAC_OS("MacOS");

    public final String value;

    private NotificationSubscriptionDeviceEnum(String value) {
        this.value = value;
    }
}
