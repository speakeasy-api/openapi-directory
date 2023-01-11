package openapisdk.models.shared;


public enum ImportJobImportMethodEnum {
    IMPORT_METHOD_UNSPECIFIED("IMPORT_METHOD_UNSPECIFIED"),
    RSA_OAEP3072_SHA1_AES256("RSA_OAEP_3072_SHA1_AES_256"),
    RSA_OAEP4096_SHA1_AES256("RSA_OAEP_4096_SHA1_AES_256"),
    RSA_OAEP3072_SHA256_AES256("RSA_OAEP_3072_SHA256_AES_256"),
    RSA_OAEP4096_SHA256_AES256("RSA_OAEP_4096_SHA256_AES_256"),
    RSA_OAEP3072_SHA256("RSA_OAEP_3072_SHA256"),
    RSA_OAEP4096_SHA256("RSA_OAEP_4096_SHA256");

    public final String value;

    private ImportJobImportMethodEnum(String value) {
        this.value = value;
    }
}
