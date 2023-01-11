package openapisdk.models.shared;


public enum ServiceMeshMembershipSpecControlPlaneEnum {
    CONTROL_PLANE_MANAGEMENT_UNSPECIFIED("CONTROL_PLANE_MANAGEMENT_UNSPECIFIED"),
    AUTOMATIC("AUTOMATIC"),
    MANUAL("MANUAL");

    public final String value;

    private ServiceMeshMembershipSpecControlPlaneEnum(String value) {
        this.value = value;
    }
}
