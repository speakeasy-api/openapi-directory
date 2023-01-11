package openapisdk.models.shared;


public enum RoleKindEnum {
    KIND_UNSPECIFIED("KIND_UNSPECIFIED"),
    ROLE("ROLE"),
    CLUSTER_ROLE("CLUSTER_ROLE");

    public final String value;

    private RoleKindEnum(String value) {
        this.value = value;
    }
}
