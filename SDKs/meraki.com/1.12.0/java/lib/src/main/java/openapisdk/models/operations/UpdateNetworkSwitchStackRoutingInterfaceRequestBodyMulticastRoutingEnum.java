package openapisdk.models.operations;


public enum UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    DISABLED("disabled"),
    ENABLED("enabled"),
    IGMP_SNOOPING_QUERIER("IGMP snooping querier");

    public final String value;

    private UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum(String value) {
        this.value = value;
    }
}
