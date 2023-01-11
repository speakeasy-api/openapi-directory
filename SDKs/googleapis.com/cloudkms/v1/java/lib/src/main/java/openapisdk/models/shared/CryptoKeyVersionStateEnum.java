package openapisdk.models.shared;


public enum CryptoKeyVersionStateEnum {
    CRYPTO_KEY_VERSION_STATE_UNSPECIFIED("CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"),
    PENDING_GENERATION("PENDING_GENERATION"),
    ENABLED("ENABLED"),
    DISABLED("DISABLED"),
    DESTROYED("DESTROYED"),
    DESTROY_SCHEDULED("DESTROY_SCHEDULED"),
    PENDING_IMPORT("PENDING_IMPORT"),
    IMPORT_FAILED("IMPORT_FAILED");

    public final String value;

    private CryptoKeyVersionStateEnum(String value) {
        this.value = value;
    }
}
