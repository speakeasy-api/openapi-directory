package openapisdk.models.shared;


public enum GceClusterConfigPrivateIpv6GoogleAccessEnum {
    PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED("PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"),
    INHERIT_FROM_SUBNETWORK("INHERIT_FROM_SUBNETWORK"),
    OUTBOUND("OUTBOUND"),
    BIDIRECTIONAL("BIDIRECTIONAL");

    public final String value;

    private GceClusterConfigPrivateIpv6GoogleAccessEnum(String value) {
        this.value = value;
    }
}
