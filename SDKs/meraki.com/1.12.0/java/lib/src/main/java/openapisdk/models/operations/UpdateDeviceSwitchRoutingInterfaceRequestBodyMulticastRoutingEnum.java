package openapisdk.models.operations;


public enum UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    DISABLED("disabled"),
    ENABLED("enabled"),
    IGMP_SNOOPING_QUERIER("IGMP snooping querier");

    public final String value;

    private UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum(String value) {
        this.value = value;
    }
}
