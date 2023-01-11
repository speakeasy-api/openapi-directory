package openapisdk.models.operations;


public enum RunsForRunAndRouteTypeExpandEnum {
    ALL("All"),
    VEHICLE_DESCRIPTOR("VehicleDescriptor"),
    VEHICLE_POSITION("VehiclePosition"),
    NONE("None");

    public final String value;

    private RunsForRunAndRouteTypeExpandEnum(String value) {
        this.value = value;
    }
}
