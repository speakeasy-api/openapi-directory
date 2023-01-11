package openapisdk.models.shared;


public enum GatewayConfigGatewayAuthMethodEnum {
    GATEWAY_AUTH_METHOD_UNSPECIFIED("GATEWAY_AUTH_METHOD_UNSPECIFIED"),
    ASSOCIATION_ONLY("ASSOCIATION_ONLY"),
    DEVICE_AUTH_TOKEN_ONLY("DEVICE_AUTH_TOKEN_ONLY"),
    ASSOCIATION_AND_DEVICE_AUTH_TOKEN("ASSOCIATION_AND_DEVICE_AUTH_TOKEN");

    public final String value;

    private GatewayConfigGatewayAuthMethodEnum(String value) {
        this.value = value;
    }
}
