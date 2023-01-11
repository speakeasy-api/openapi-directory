package openapisdk.models.shared;


public enum InvitationRoleEnum {
    ADMIN_ROLE_UNSPECIFIED("ADMIN_ROLE_UNSPECIFIED"),
    OWNER("OWNER"),
    CO_OWNER("CO_OWNER"),
    MANAGER("MANAGER"),
    COMMUNITY_MANAGER("COMMUNITY_MANAGER");

    public final String value;

    private InvitationRoleEnum(String value) {
        this.value = value;
    }
}
