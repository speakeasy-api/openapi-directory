package openapisdk.models.shared;


public enum AccountPermissionLevelEnum {
    PERMISSION_LEVEL_UNSPECIFIED("PERMISSION_LEVEL_UNSPECIFIED"),
    OWNER_LEVEL("OWNER_LEVEL"),
    MEMBER_LEVEL("MEMBER_LEVEL");

    public final String value;

    private AccountPermissionLevelEnum(String value) {
        this.value = value;
    }
}
