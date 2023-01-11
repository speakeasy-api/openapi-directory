package openapisdk.models.shared;


public enum UserRolePermissionAvailabilityEnum {
    NOT_AVAILABLE_BY_DEFAULT("NOT_AVAILABLE_BY_DEFAULT"),
    ACCOUNT_BY_DEFAULT("ACCOUNT_BY_DEFAULT"),
    SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT("SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT"),
    ACCOUNT_ALWAYS("ACCOUNT_ALWAYS"),
    SUBACCOUNT_AND_ACCOUNT_ALWAYS("SUBACCOUNT_AND_ACCOUNT_ALWAYS"),
    USER_PROFILE_ONLY("USER_PROFILE_ONLY");

    public final String value;

    private UserRolePermissionAvailabilityEnum(String value) {
        this.value = value;
    }
}
