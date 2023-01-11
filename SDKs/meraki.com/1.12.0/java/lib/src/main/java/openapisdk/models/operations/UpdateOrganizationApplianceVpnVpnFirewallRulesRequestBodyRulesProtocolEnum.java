package openapisdk.models.operations;


public enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP("icmp"),
    ANY("any");

    public final String value;

    private UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum(String value) {
        this.value = value;
    }
}
