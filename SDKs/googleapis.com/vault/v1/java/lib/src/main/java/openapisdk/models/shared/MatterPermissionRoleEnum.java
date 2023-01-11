package openapisdk.models.shared;


public enum MatterPermissionRoleEnum {
    ROLE_UNSPECIFIED("ROLE_UNSPECIFIED"),
    COLLABORATOR("COLLABORATOR"),
    OWNER("OWNER");

    public final String value;

    private MatterPermissionRoleEnum(String value) {
        this.value = value;
    }
}
