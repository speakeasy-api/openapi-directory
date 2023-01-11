package openapisdk.models.shared;


public enum InvitationRoleEnum {
    ADMIN_ROLE_UNSPECIFIED("ADMIN_ROLE_UNSPECIFIED"),
    PRIMARY_OWNER("PRIMARY_OWNER"),
    OWNER("OWNER"),
    MANAGER("MANAGER"),
    SITE_MANAGER("SITE_MANAGER");

    public final String value;

    private InvitationRoleEnum(String value) {
        this.value = value;
    }
}
