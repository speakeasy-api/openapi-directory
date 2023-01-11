package openapisdk.models.shared;


public enum ServiceMeshControlPlaneManagementStateEnum {
    LIFECYCLE_STATE_UNSPECIFIED("LIFECYCLE_STATE_UNSPECIFIED"),
    DISABLED("DISABLED"),
    FAILED_PRECONDITION("FAILED_PRECONDITION"),
    PROVISIONING("PROVISIONING"),
    ACTIVE("ACTIVE"),
    STALLED("STALLED"),
    NEEDS_ATTENTION("NEEDS_ATTENTION"),
    DEGRADED("DEGRADED");

    public final String value;

    private ServiceMeshControlPlaneManagementStateEnum(String value) {
        this.value = value;
    }
}
