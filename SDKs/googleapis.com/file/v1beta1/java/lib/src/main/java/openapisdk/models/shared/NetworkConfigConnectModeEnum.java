package openapisdk.models.shared;


public enum NetworkConfigConnectModeEnum {
    CONNECT_MODE_UNSPECIFIED("CONNECT_MODE_UNSPECIFIED"),
    DIRECT_PEERING("DIRECT_PEERING"),
    PRIVATE_SERVICE_ACCESS("PRIVATE_SERVICE_ACCESS");

    public final String value;

    private NetworkConfigConnectModeEnum(String value) {
        this.value = value;
    }
}
