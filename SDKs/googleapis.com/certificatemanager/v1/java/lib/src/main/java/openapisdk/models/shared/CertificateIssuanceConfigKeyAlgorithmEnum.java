package openapisdk.models.shared;


public enum CertificateIssuanceConfigKeyAlgorithmEnum {
    KEY_ALGORITHM_UNSPECIFIED("KEY_ALGORITHM_UNSPECIFIED"),
    RSA2048("RSA_2048"),
    ECDSA_P256("ECDSA_P256");

    public final String value;

    private CertificateIssuanceConfigKeyAlgorithmEnum(String value) {
        this.value = value;
    }
}
