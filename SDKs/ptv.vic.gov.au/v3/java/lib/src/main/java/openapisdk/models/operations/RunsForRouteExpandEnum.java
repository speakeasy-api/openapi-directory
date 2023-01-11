package openapisdk.models.operations;


public enum RunsForRouteExpandEnum {
    ALL("All"),
    VEHICLE_DESCRIPTOR("VehicleDescriptor"),
    VEHICLE_POSITION("VehiclePosition"),
    NONE("None");

    public final String value;

    private RunsForRouteExpandEnum(String value) {
        this.value = value;
    }
}
