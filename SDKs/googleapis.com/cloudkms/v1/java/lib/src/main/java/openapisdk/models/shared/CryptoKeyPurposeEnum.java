package openapisdk.models.shared;


public enum CryptoKeyPurposeEnum {
    CRYPTO_KEY_PURPOSE_UNSPECIFIED("CRYPTO_KEY_PURPOSE_UNSPECIFIED"),
    ENCRYPT_DECRYPT("ENCRYPT_DECRYPT"),
    ASYMMETRIC_SIGN("ASYMMETRIC_SIGN"),
    ASYMMETRIC_DECRYPT("ASYMMETRIC_DECRYPT"),
    MAC("MAC");

    public final String value;

    private CryptoKeyPurposeEnum(String value) {
        this.value = value;
    }
}
