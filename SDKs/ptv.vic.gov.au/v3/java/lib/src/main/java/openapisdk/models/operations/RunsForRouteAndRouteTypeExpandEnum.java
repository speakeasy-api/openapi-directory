package openapisdk.models.operations;


public enum RunsForRouteAndRouteTypeExpandEnum {
    ALL("All"),
    VEHICLE_DESCRIPTOR("VehicleDescriptor"),
    VEHICLE_POSITION("VehiclePosition"),
    NONE("None");

    public final String value;

    private RunsForRouteAndRouteTypeExpandEnum(String value) {
        this.value = value;
    }
}
