package openapisdk.models.operations;


public enum UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum {
    RUN_A_DHCP_SERVER("Run a DHCP server"),
    RELAY_DHCP_TO_ANOTHER_SERVER("Relay DHCP to another server"),
    DO_NOT_RESPOND_TO_DHCP_REQUESTS("Do not respond to DHCP requests");

    public final String value;

    private UpdateNetworkApplianceVlanRequestBodyDhcpHandlingEnum(String value) {
        this.value = value;
    }
}
