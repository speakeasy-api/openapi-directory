package openapisdk.models.shared;


public enum AccountUserProfileTraffickerTypeEnum {
    INTERNAL_NON_TRAFFICKER("INTERNAL_NON_TRAFFICKER"),
    INTERNAL_TRAFFICKER("INTERNAL_TRAFFICKER"),
    EXTERNAL_TRAFFICKER("EXTERNAL_TRAFFICKER");

    public final String value;

    private AccountUserProfileTraffickerTypeEnum(String value) {
        this.value = value;
    }
}
