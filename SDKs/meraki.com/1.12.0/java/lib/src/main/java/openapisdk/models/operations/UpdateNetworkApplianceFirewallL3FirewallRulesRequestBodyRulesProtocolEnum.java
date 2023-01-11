package openapisdk.models.operations;


public enum UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ANY("any");

    public final String value;

    private UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum(String value) {
        this.value = value;
    }
}
