package openapisdk.models.operations;


public enum CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum {
    APPLICATION("application"),
    APPLICATION_CATEGORY("applicationCategory"),
    HOST("host"),
    PORT("port"),
    IP_RANGE("ipRange"),
    LOCAL_NET("localNet");

    public final String value;

    private CreateNetworkGroupPolicyRequestBodyFirewallAndTrafficShapingTrafficShapingRulesDefinitionsTypeEnum(String value) {
        this.value = value;
    }
}
