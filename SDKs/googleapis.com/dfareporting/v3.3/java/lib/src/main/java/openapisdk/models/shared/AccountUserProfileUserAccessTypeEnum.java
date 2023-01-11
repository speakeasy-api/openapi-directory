package openapisdk.models.shared;


public enum AccountUserProfileUserAccessTypeEnum {
    NORMAL_USER("NORMAL_USER"),
    SUPER_USER("SUPER_USER"),
    INTERNAL_ADMINISTRATOR("INTERNAL_ADMINISTRATOR"),
    READ_ONLY_SUPER_USER("READ_ONLY_SUPER_USER");

    public final String value;

    private AccountUserProfileUserAccessTypeEnum(String value) {
        this.value = value;
    }
}
