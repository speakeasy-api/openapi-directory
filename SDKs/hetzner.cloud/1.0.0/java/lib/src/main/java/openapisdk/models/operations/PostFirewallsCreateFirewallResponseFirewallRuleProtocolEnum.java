package openapisdk.models.operations;


public enum PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ESP("esp"),
    GRE("gre");

    public final String value;

    private PostFirewallsCreateFirewallResponseFirewallRuleProtocolEnum(String value) {
        this.value = value;
    }
}
