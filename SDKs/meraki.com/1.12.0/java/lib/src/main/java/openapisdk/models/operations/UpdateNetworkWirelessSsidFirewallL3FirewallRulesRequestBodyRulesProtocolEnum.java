package openapisdk.models.operations;


public enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ANY("any");

    public final String value;

    private UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum(String value) {
        this.value = value;
    }
}
