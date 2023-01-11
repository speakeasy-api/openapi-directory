package openapisdk.models.operations;


public enum UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum {
    DHCP_DISABLED("dhcpDisabled"),
    DHCP_RELAY("dhcpRelay"),
    DHCP_SERVER("dhcpServer");

    public final String value;

    private UpdateDeviceSwitchRoutingInterfaceDhcpRequestBodyDhcpModeEnum(String value) {
        this.value = value;
    }
}
