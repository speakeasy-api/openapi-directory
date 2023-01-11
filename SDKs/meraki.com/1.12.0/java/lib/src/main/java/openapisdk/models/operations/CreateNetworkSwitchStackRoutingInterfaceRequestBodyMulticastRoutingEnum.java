package openapisdk.models.operations;


public enum CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    DISABLED("disabled"),
    ENABLED("enabled"),
    IGMP_SNOOPING_QUERIER("IGMP snooping querier");

    public final String value;

    private CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum(String value) {
        this.value = value;
    }
}
