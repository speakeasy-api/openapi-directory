package openapisdk.models.shared;


public enum EncryptionInfoEncryptionSourceEnum {
    ENCRYPTION_SCOPE_UNKNOWN("ENCRYPTION_SCOPE_UNKNOWN"),
    AD_SERVING("AD_SERVING"),
    DATA_TRANSFER("DATA_TRANSFER");

    public final String value;

    private EncryptionInfoEncryptionSourceEnum(String value) {
        this.value = value;
    }
}
