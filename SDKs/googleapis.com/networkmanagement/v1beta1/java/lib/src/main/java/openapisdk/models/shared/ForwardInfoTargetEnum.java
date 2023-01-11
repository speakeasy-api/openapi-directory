package openapisdk.models.shared;


public enum ForwardInfoTargetEnum {
    TARGET_UNSPECIFIED("TARGET_UNSPECIFIED"),
    PEERING_VPC("PEERING_VPC"),
    VPN_GATEWAY("VPN_GATEWAY"),
    INTERCONNECT("INTERCONNECT"),
    GKE_MASTER("GKE_MASTER"),
    IMPORTED_CUSTOM_ROUTE_NEXT_HOP("IMPORTED_CUSTOM_ROUTE_NEXT_HOP"),
    CLOUD_SQL_INSTANCE("CLOUD_SQL_INSTANCE"),
    ANOTHER_PROJECT("ANOTHER_PROJECT");

    public final String value;

    private ForwardInfoTargetEnum(String value) {
        this.value = value;
    }
}
