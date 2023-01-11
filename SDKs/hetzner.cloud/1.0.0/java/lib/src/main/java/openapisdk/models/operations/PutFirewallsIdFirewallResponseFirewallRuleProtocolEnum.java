package openapisdk.models.operations;


public enum PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ESP("esp"),
    GRE("gre");

    public final String value;

    private PutFirewallsIdFirewallResponseFirewallRuleProtocolEnum(String value) {
        this.value = value;
    }
}
