package openapisdk.models.operations;


public enum UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    APPLICATION("application"),
    APPLICATION_CATEGORY("applicationCategory"),
    HOST("host"),
    PORT("port"),
    IP_RANGE("ipRange");

    public final String value;

    private UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum(String value) {
        this.value = value;
    }
}
