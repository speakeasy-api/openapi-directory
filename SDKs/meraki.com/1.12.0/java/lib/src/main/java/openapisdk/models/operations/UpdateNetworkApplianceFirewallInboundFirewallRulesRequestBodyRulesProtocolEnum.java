package openapisdk.models.operations;


public enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ANY("any");

    public final String value;

    private UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum(String value) {
        this.value = value;
    }
}
