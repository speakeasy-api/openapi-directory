package openapisdk.models.shared;


public enum GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum {
    NETWORK_CONNECTION_STATE_UNSPECIFIED("NETWORK_CONNECTION_STATE_UNSPECIFIED"),
    ONLINE("ONLINE"),
    CONNECTED("CONNECTED"),
    PORTAL("PORTAL"),
    CONNECTING("CONNECTING"),
    NOT_CONNECTED("NOT_CONNECTED");

    public final String value;

    private GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum(String value) {
        this.value = value;
    }
}
