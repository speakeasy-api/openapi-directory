package openapisdk.models.shared;


public enum ComputeSchedulingOnHostMaintenanceEnum {
    ON_HOST_MAINTENANCE_UNSPECIFIED("ON_HOST_MAINTENANCE_UNSPECIFIED"),
    TERMINATE("TERMINATE"),
    MIGRATE("MIGRATE");

    public final String value;

    private ComputeSchedulingOnHostMaintenanceEnum(String value) {
        this.value = value;
    }
}
