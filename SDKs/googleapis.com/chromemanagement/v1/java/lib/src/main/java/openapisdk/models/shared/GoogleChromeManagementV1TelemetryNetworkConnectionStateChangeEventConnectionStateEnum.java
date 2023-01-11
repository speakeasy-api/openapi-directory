package openapisdk.models.shared;


public enum GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum {
    NETWORK_CONNECTION_STATE_UNSPECIFIED("NETWORK_CONNECTION_STATE_UNSPECIFIED"),
    ONLINE("ONLINE"),
    CONNECTED("CONNECTED"),
    PORTAL("PORTAL"),
    CONNECTING("CONNECTING"),
    NOT_CONNECTED("NOT_CONNECTED");

    public final String value;

    private GoogleChromeManagementV1TelemetryNetworkConnectionStateChangeEventConnectionStateEnum(String value) {
        this.value = value;
    }
}
