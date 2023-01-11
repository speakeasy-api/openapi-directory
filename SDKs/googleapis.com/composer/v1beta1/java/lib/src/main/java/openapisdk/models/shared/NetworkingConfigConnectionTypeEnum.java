package openapisdk.models.shared;


public enum NetworkingConfigConnectionTypeEnum {
    CONNECTION_TYPE_UNSPECIFIED("CONNECTION_TYPE_UNSPECIFIED"),
    VPC_PEERING("VPC_PEERING"),
    PRIVATE_SERVICE_CONNECT("PRIVATE_SERVICE_CONNECT");

    public final String value;

    private NetworkingConfigConnectionTypeEnum(String value) {
        this.value = value;
    }
}
