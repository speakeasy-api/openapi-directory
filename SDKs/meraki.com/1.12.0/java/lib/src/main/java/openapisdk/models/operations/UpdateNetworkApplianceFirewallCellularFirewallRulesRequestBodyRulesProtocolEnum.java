package openapisdk.models.operations;


public enum UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ANY("any");

    public final String value;

    private UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum(String value) {
        this.value = value;
    }
}
