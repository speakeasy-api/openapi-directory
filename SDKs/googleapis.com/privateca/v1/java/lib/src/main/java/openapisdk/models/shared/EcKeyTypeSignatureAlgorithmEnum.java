package openapisdk.models.shared;


public enum EcKeyTypeSignatureAlgorithmEnum {
    EC_SIGNATURE_ALGORITHM_UNSPECIFIED("EC_SIGNATURE_ALGORITHM_UNSPECIFIED"),
    ECDSA_P256("ECDSA_P256"),
    ECDSA_P384("ECDSA_P384"),
    EDDSA25519("EDDSA_25519");

    public final String value;

    private EcKeyTypeSignatureAlgorithmEnum(String value) {
        this.value = value;
    }
}
