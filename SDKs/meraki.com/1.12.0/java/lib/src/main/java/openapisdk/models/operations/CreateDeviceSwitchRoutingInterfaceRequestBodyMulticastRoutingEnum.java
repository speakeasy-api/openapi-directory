package openapisdk.models.operations;


public enum CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    DISABLED("disabled"),
    ENABLED("enabled"),
    IGMP_SNOOPING_QUERIER("IGMP snooping querier");

    public final String value;

    private CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum(String value) {
        this.value = value;
    }
}
