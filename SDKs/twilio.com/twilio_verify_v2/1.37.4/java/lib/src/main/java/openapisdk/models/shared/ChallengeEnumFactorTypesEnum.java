package openapisdk.models.shared;


public enum ChallengeEnumFactorTypesEnum {
    PUSH("push"),
    TOTP("totp");

    public final String value;

    private ChallengeEnumFactorTypesEnum(String value) {
        this.value = value;
    }
}
