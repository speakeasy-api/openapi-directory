package openapisdk.models.shared;


public enum DevicePolicyAllowedEncryptionStatusesEnum {
    ENCRYPTION_UNSPECIFIED("ENCRYPTION_UNSPECIFIED"),
    ENCRYPTION_UNSUPPORTED("ENCRYPTION_UNSUPPORTED"),
    UNENCRYPTED("UNENCRYPTED"),
    ENCRYPTED("ENCRYPTED");

    public final String value;

    private DevicePolicyAllowedEncryptionStatusesEnum(String value) {
        this.value = value;
    }
}
