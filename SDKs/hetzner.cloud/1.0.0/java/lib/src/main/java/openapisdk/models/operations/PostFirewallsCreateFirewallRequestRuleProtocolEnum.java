package openapisdk.models.operations;


public enum PostFirewallsCreateFirewallRequestRuleProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ESP("esp"),
    GRE("gre");

    public final String value;

    private PostFirewallsCreateFirewallRequestRuleProtocolEnum(String value) {
        this.value = value;
    }
}
