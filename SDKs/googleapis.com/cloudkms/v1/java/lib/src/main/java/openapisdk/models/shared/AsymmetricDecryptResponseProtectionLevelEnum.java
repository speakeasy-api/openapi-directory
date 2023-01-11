package openapisdk.models.shared;


public enum AsymmetricDecryptResponseProtectionLevelEnum {
    PROTECTION_LEVEL_UNSPECIFIED("PROTECTION_LEVEL_UNSPECIFIED"),
    SOFTWARE("SOFTWARE"),
    HSM("HSM"),
    EXTERNAL("EXTERNAL"),
    EXTERNAL_VPC("EXTERNAL_VPC");

    public final String value;

    private AsymmetricDecryptResponseProtectionLevelEnum(String value) {
        this.value = value;
    }
}
