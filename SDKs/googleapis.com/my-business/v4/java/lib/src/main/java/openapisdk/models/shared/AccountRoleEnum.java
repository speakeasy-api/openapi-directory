package openapisdk.models.shared;


public enum AccountRoleEnum {
    ACCOUNT_ROLE_UNSPECIFIED("ACCOUNT_ROLE_UNSPECIFIED"),
    OWNER("OWNER"),
    CO_OWNER("CO_OWNER"),
    MANAGER("MANAGER"),
    COMMUNITY_MANAGER("COMMUNITY_MANAGER");

    public final String value;

    private AccountRoleEnum(String value) {
        this.value = value;
    }
}
