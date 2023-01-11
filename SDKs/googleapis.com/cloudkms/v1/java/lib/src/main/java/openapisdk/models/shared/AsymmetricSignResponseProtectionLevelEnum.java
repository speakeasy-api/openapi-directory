package openapisdk.models.shared;


public enum AsymmetricSignResponseProtectionLevelEnum {
    PROTECTION_LEVEL_UNSPECIFIED("PROTECTION_LEVEL_UNSPECIFIED"),
    SOFTWARE("SOFTWARE"),
    HSM("HSM"),
    EXTERNAL("EXTERNAL"),
    EXTERNAL_VPC("EXTERNAL_VPC");

    public final String value;

    private AsymmetricSignResponseProtectionLevelEnum(String value) {
        this.value = value;
    }
}
