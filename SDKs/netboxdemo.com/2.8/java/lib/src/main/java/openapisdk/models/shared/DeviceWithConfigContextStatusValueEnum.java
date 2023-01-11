package openapisdk.models.shared;


public enum DeviceWithConfigContextStatusValueEnum {
    OFFLINE("offline"),
    ACTIVE("active"),
    PLANNED("planned"),
    STAGED("staged"),
    FAILED("failed"),
    INVENTORY("inventory"),
    DECOMMISSIONING("decommissioning");

    public final String value;

    private DeviceWithConfigContextStatusValueEnum(String value) {
        this.value = value;
    }
}
