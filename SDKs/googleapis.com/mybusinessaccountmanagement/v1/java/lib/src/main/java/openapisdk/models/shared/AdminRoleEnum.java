package openapisdk.models.shared;


public enum AdminRoleEnum {
    ADMIN_ROLE_UNSPECIFIED("ADMIN_ROLE_UNSPECIFIED"),
    PRIMARY_OWNER("PRIMARY_OWNER"),
    OWNER("OWNER"),
    MANAGER("MANAGER"),
    SITE_MANAGER("SITE_MANAGER");

    public final String value;

    private AdminRoleEnum(String value) {
        this.value = value;
    }
}
