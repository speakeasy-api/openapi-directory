package openapisdk.models.shared;


public enum DeviceStatusLabelEnum {
    OFFLINE("Offline"),
    ACTIVE("Active"),
    PLANNED("Planned"),
    STAGED("Staged"),
    FAILED("Failed"),
    INVENTORY("Inventory"),
    DECOMMISSIONING("Decommissioning");

    public final String value;

    private DeviceStatusLabelEnum(String value) {
        this.value = value;
    }
}
