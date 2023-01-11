package openapisdk.models.shared;


public enum CvsSv3AttackVectorEnum {
    ATTACK_VECTOR_UNSPECIFIED("ATTACK_VECTOR_UNSPECIFIED"),
    ATTACK_VECTOR_NETWORK("ATTACK_VECTOR_NETWORK"),
    ATTACK_VECTOR_ADJACENT("ATTACK_VECTOR_ADJACENT"),
    ATTACK_VECTOR_LOCAL("ATTACK_VECTOR_LOCAL"),
    ATTACK_VECTOR_PHYSICAL("ATTACK_VECTOR_PHYSICAL");

    public final String value;

    private CvsSv3AttackVectorEnum(String value) {
        this.value = value;
    }
}
