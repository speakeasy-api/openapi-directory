package openapisdk.models.shared;


public enum DeviceStatusValueEnum {
    OFFLINE("offline"),
    ACTIVE("active"),
    PLANNED("planned"),
    STAGED("staged"),
    FAILED("failed"),
    INVENTORY("inventory"),
    DECOMMISSIONING("decommissioning");

    public final String value;

    private DeviceStatusValueEnum(String value) {
        this.value = value;
    }
}
