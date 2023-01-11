package openapisdk.models.operations;


public enum GetNetworkEventsProductTypeEnum {
    WIRELESS("wireless"),
    APPLIANCE("appliance"),
    SWITCH_("switch"),
    SYSTEMS_MANAGER("systemsManager"),
    CAMERA("camera"),
    CELLULAR_GATEWAY("cellularGateway");

    public final String value;

    private GetNetworkEventsProductTypeEnum(String value) {
        this.value = value;
    }
}
