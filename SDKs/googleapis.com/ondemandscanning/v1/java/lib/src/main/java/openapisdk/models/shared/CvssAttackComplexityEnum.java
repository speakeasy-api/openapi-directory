package openapisdk.models.shared;


public enum CvssAttackComplexityEnum {
    ATTACK_COMPLEXITY_UNSPECIFIED("ATTACK_COMPLEXITY_UNSPECIFIED"),
    ATTACK_COMPLEXITY_LOW("ATTACK_COMPLEXITY_LOW"),
    ATTACK_COMPLEXITY_HIGH("ATTACK_COMPLEXITY_HIGH");

    public final String value;

    private CvssAttackComplexityEnum(String value) {
        this.value = value;
    }
}
