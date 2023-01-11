package openapisdk.models.operations;


public enum UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DHCP_DISABLED("dhcpDisabled"),
    DHCP_RELAY("dhcpRelay"),
    DHCP_SERVER("dhcpServer");

    public final String value;

    private UpdateNetworkSwitchStackRoutingInterfaceDhcpRequestBodyDhcpModeEnum(String value) {
        this.value = value;
    }
}
