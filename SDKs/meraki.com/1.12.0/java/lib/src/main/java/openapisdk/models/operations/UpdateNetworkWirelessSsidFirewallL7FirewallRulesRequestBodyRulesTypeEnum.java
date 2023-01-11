package openapisdk.models.operations;


public enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    APPLICATION("application"),
    APPLICATION_CATEGORY("applicationCategory"),
    HOST("host"),
    PORT("port"),
    IP_RANGE("ipRange");

    public final String value;

    private UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum(String value) {
        this.value = value;
    }
}
