package openapisdk.models.shared;


public enum WritableDeviceWithConfigContextStatusEnum {
    OFFLINE("offline"),
    ACTIVE("active"),
    PLANNED("planned"),
    STAGED("staged"),
    FAILED("failed"),
    INVENTORY("inventory"),
    DECOMMISSIONING("decommissioning");

    public final String value;

    private WritableDeviceWithConfigContextStatusEnum(String value) {
        this.value = value;
    }
}
