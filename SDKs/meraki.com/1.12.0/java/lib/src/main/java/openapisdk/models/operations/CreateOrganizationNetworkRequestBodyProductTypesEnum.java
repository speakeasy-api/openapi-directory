package openapisdk.models.operations;


public enum CreateOrganizationNetworkRequestBodyProductTypesEnum {
    WIRELESS("wireless"),
    APPLIANCE("appliance"),
    SWITCH_("switch"),
    SYSTEMS_MANAGER("systemsManager"),
    CAMERA("camera"),
    CELLULAR_GATEWAY("cellularGateway"),
    SENSOR("sensor"),
    ENVIRONMENTAL("environmental");

    public final String value;

    private CreateOrganizationNetworkRequestBodyProductTypesEnum(String value) {
        this.value = value;
    }
}
