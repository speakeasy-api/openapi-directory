package openapisdk.models.operations;


public enum PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ESP("esp"),
    GRE("gre");

    public final String value;

    private PostFirewallsIdActionsSetRulesSetRulesRequestRuleProtocolEnum(String value) {
        this.value = value;
    }
}
