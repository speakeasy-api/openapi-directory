package openapisdk.models.shared;


public enum ServiceMeshMembershipSpecManagementEnum {
    MANAGEMENT_UNSPECIFIED("MANAGEMENT_UNSPECIFIED"),
    MANAGEMENT_AUTOMATIC("MANAGEMENT_AUTOMATIC"),
    MANAGEMENT_MANUAL("MANAGEMENT_MANUAL");

    public final String value;

    private ServiceMeshMembershipSpecManagementEnum(String value) {
        this.value = value;
    }
}
