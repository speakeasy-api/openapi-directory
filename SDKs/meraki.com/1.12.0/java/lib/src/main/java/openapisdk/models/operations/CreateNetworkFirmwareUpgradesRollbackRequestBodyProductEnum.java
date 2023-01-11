package openapisdk.models.operations;


public enum CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum {
    WIRELESS("wireless"),
    SWITCH_("switch"),
    APPLIANCE("appliance"),
    CAMERA("camera"),
    VMX_HOST("vmxHost"),
    CELLULAR_GATEWAY("cellularGateway");

    public final String value;

    private CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum(String value) {
        this.value = value;
    }
}
