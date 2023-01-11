package openapisdk.models.shared;


public enum KeyVersionSpecAlgorithmEnum {
    SIGN_HASH_ALGORITHM_UNSPECIFIED("SIGN_HASH_ALGORITHM_UNSPECIFIED"),
    RSA_PSS2048_SHA256("RSA_PSS_2048_SHA256"),
    RSA_PSS3072_SHA256("RSA_PSS_3072_SHA256"),
    RSA_PSS4096_SHA256("RSA_PSS_4096_SHA256"),
    RSA_PKCS12048_SHA256("RSA_PKCS1_2048_SHA256"),
    RSA_PKCS13072_SHA256("RSA_PKCS1_3072_SHA256"),
    RSA_PKCS14096_SHA256("RSA_PKCS1_4096_SHA256"),
    EC_P256_SHA256("EC_P256_SHA256"),
    EC_P384_SHA384("EC_P384_SHA384");

    public final String value;

    private KeyVersionSpecAlgorithmEnum(String value) {
        this.value = value;
    }
}
