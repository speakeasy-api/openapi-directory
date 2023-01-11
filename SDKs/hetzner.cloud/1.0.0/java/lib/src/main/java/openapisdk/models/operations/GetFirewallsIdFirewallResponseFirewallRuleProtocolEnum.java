package openapisdk.models.operations;


public enum GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ESP("esp"),
    GRE("gre");

    public final String value;

    private GetFirewallsIdFirewallResponseFirewallRuleProtocolEnum(String value) {
        this.value = value;
    }
}
