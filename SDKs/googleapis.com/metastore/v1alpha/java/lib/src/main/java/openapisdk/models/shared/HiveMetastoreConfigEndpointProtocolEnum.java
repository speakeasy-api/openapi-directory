package openapisdk.models.shared;


public enum HiveMetastoreConfigEndpointProtocolEnum {
    ENDPOINT_PROTOCOL_UNSPECIFIED("ENDPOINT_PROTOCOL_UNSPECIFIED"),
    THRIFT("THRIFT"),
    GRPC("GRPC");

    public final String value;

    private HiveMetastoreConfigEndpointProtocolEnum(String value) {
        this.value = value;
    }
}
