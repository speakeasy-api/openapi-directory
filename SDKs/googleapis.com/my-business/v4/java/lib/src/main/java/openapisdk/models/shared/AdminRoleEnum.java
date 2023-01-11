package openapisdk.models.shared;


public enum AdminRoleEnum {
    ADMIN_ROLE_UNSPECIFIED("ADMIN_ROLE_UNSPECIFIED"),
    OWNER("OWNER"),
    CO_OWNER("CO_OWNER"),
    MANAGER("MANAGER"),
    COMMUNITY_MANAGER("COMMUNITY_MANAGER");

    public final String value;

    private AdminRoleEnum(String value) {
        this.value = value;
    }
}
