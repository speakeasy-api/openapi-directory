package openapisdk.models.operations;


public enum DeparturesGetForStopExpandEnum {
    ALL("All"),
    STOP("Stop"),
    ROUTE("Route"),
    RUN("Run"),
    DIRECTION("Direction"),
    DISRUPTION("Disruption"),
    VEHICLE_DESCRIPTOR("VehicleDescriptor"),
    VEHICLE_POSITION("VehiclePosition"),
    NONE("None");

    public final String value;

    private DeparturesGetForStopExpandEnum(String value) {
        this.value = value;
    }
}
