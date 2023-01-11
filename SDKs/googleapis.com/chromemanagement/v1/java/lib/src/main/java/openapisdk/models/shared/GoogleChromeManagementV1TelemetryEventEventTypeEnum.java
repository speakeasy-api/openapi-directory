package openapisdk.models.shared;


public enum GoogleChromeManagementV1TelemetryEventEventTypeEnum {
    EVENT_TYPE_UNSPECIFIED("EVENT_TYPE_UNSPECIFIED"),
    AUDIO_SEVERE_UNDERRUN("AUDIO_SEVERE_UNDERRUN"),
    NETWORK_CONNECTION_STATE_CHANGE("NETWORK_CONNECTION_STATE_CHANGE"),
    USB_ADDED("USB_ADDED"),
    USB_REMOVED("USB_REMOVED"),
    NETWORK_HTTPS_LATENCY_CHANGE("NETWORK_HTTPS_LATENCY_CHANGE");

    public final String value;

    private GoogleChromeManagementV1TelemetryEventEventTypeEnum(String value) {
        this.value = value;
    }
}
