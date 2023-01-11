package openapisdk.models.shared;


public enum InstanceConnectModeEnum {
    CONNECT_MODE_UNSPECIFIED("CONNECT_MODE_UNSPECIFIED"),
    DIRECT_PEERING("DIRECT_PEERING"),
    PRIVATE_SERVICE_ACCESS("PRIVATE_SERVICE_ACCESS");

    public final String value;

    private InstanceConnectModeEnum(String value) {
        this.value = value;
    }
}
