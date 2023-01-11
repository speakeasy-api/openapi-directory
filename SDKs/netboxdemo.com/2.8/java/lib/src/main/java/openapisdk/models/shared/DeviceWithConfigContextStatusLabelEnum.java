package openapisdk.models.shared;


public enum DeviceWithConfigContextStatusLabelEnum {
    OFFLINE("Offline"),
    ACTIVE("Active"),
    PLANNED("Planned"),
    STAGED("Staged"),
    FAILED("Failed"),
    INVENTORY("Inventory"),
    DECOMMISSIONING("Decommissioning");

    public final String value;

    private DeviceWithConfigContextStatusLabelEnum(String value) {
        this.value = value;
    }
}
