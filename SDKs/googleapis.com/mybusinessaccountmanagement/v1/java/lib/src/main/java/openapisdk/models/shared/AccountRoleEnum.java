package openapisdk.models.shared;


public enum AccountRoleEnum {
    ACCOUNT_ROLE_UNSPECIFIED("ACCOUNT_ROLE_UNSPECIFIED"),
    PRIMARY_OWNER("PRIMARY_OWNER"),
    OWNER("OWNER"),
    MANAGER("MANAGER"),
    SITE_MANAGER("SITE_MANAGER");

    public final String value;

    private AccountRoleEnum(String value) {
        this.value = value;
    }
}
