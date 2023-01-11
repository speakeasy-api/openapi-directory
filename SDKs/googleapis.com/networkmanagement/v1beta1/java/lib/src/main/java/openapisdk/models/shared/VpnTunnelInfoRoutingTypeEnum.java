package openapisdk.models.shared;


public enum VpnTunnelInfoRoutingTypeEnum {
    ROUTING_TYPE_UNSPECIFIED("ROUTING_TYPE_UNSPECIFIED"),
    ROUTE_BASED("ROUTE_BASED"),
    POLICY_BASED("POLICY_BASED"),
    DYNAMIC("DYNAMIC");

    public final String value;

    private VpnTunnelInfoRoutingTypeEnum(String value) {
        this.value = value;
    }
}
