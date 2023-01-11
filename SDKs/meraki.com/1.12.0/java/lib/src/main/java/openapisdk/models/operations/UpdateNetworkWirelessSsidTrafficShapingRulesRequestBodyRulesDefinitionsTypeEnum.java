package openapisdk.models.operations;


public enum UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum {
    APPLICATION("application"),
    APPLICATION_CATEGORY("applicationCategory"),
    HOST("host"),
    PORT("port"),
    IP_RANGE("ipRange"),
    LOCAL_NET("localNet");

    public final String value;

    private UpdateNetworkWirelessSsidTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum(String value) {
        this.value = value;
    }
}
