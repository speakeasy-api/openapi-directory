package openapisdk.models.shared;


public enum GatewayConfigGatewayTypeEnum {
    GATEWAY_TYPE_UNSPECIFIED("GATEWAY_TYPE_UNSPECIFIED"),
    GATEWAY("GATEWAY"),
    NON_GATEWAY("NON_GATEWAY");

    public final String value;

    private GatewayConfigGatewayTypeEnum(String value) {
        this.value = value;
    }
}
