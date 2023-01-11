package openapisdk.models.operations;


public enum GetFirewallsFirewallsResponseFirewallRuleProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ESP("esp"),
    GRE("gre");

    public final String value;

    private GetFirewallsFirewallsResponseFirewallRuleProtocolEnum(String value) {
        this.value = value;
    }
}
