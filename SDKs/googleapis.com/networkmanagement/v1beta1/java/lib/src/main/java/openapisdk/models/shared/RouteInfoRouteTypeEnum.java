package openapisdk.models.shared;


public enum RouteInfoRouteTypeEnum {
    ROUTE_TYPE_UNSPECIFIED("ROUTE_TYPE_UNSPECIFIED"),
    SUBNET("SUBNET"),
    STATIC_("STATIC"),
    DYNAMIC("DYNAMIC"),
    PEERING_SUBNET("PEERING_SUBNET"),
    PEERING_STATIC("PEERING_STATIC"),
    PEERING_DYNAMIC("PEERING_DYNAMIC"),
    POLICY_BASED("POLICY_BASED");

    public final String value;

    private RouteInfoRouteTypeEnum(String value) {
        this.value = value;
    }
}
