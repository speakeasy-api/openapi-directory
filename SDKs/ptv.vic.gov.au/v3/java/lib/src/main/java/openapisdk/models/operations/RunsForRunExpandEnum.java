package openapisdk.models.operations;


public enum RunsForRunExpandEnum {
    ALL("All"),
    VEHICLE_DESCRIPTOR("VehicleDescriptor"),
    VEHICLE_POSITION("VehiclePosition"),
    NONE("None");

    public final String value;

    private RunsForRunExpandEnum(String value) {
        this.value = value;
    }
}
