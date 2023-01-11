package openapisdk.models.operations;


public enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum {
    TCP("tcp"),
    UDP("udp"),
    ICMP_PING("icmp-ping"),
    ANY("any");

    public final String value;

    private UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum(String value) {
        this.value = value;
    }
}
